import Image from "next/image";
import { Event, TypeEvent } from "@/types";
import Link from "next/link";
import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faChevronRight,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export interface EventProps {
  data: Event;
}

const EventContainer: React.FC<EventProps> = ({ data }) => {
  const startDate = useMemo(
    () => new Date(`${data.start_date}T00:00:00.000Z`),
    [data.start_date]
  );

  const endDate = useMemo(
    () => new Date(`${data.end_date}T00:00:00.000Z`),
    [data.end_date]
  );

  const formattedDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      timeZone: "UTC",
    }).format(date);
  };

  const eventTypes: Record<string, string> = {
    [TypeEvent.in_person]: "In person",
    [TypeEvent.online]: "Online",
    [TypeEvent.hybrid]: "Hybrid",
  };

  const regions: { [key: number]: string } = {
    1: "africa",
    2: "americas",
    3: "asia",
    4: "europe",
    5: "oceania",
  };

  const isPastDate = (date: string | Date): boolean => {
    const inputDate = new Date(date);
    const currentDate = new Date();

    const normalizeDate = (date: Date) => {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };

    const normalizedInputDate = normalizeDate(inputDate);
    const normalizedCurrentDate = normalizeDate(currentDate);

    return normalizedInputDate < normalizedCurrentDate;
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="flex sm:flex-row flex-col">
        {/* Event Image */}
        <div className="sm:w-60 w-full">
          {data.event_image_url ? (
            <div className="relative sm:aspect-square aspect-video">
              <Image
                src={`https://api.iauoutreach.org${data.event_image_url}`}
                alt={data.name || "Event image"}
                className="sm:rounded-ss-lg sm:rounded-t-none rounded-t-lg object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute w-10 bg-primary-main sm:rounded-ss-lg sm:rounded-t-none rounded-t-lg">
                <time
                  className="uppercase text-center text-white text-xs p-2 flex"
                  dateTime={data.start_date}
                >
                  {formattedDate(startDate)}
                </time>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center bg-primary-main text-white text-2xl uppercase p-8 text-center sm:rounded-ss-lg sm:rounded-t-none rounded-t-lg sm:aspect-square">
              <time dateTime={data.start_date}>{formattedDate(startDate)}</time>
            </div>
          )}

          <div className="p-4 space-y-4">
            <div className="flex flex-wrap gap-2">
              <FontAwesomeIcon icon={faLocationDot} />
              <span className="text-xs text-gray-600">{`${data.city}, ${data.country}`}</span>
            </div>

            <div className="flex gap-2">
              <FontAwesomeIcon icon={faCalendarDay} />
              <p className="text-xs text-gray-600">
                <time dateTime={data.start_date}>
                  {formattedDate(startDate)}
                </time>
                <span> to </span>
                <time dateTime={data.end_date}>{formattedDate(endDate)}</time>
              </p>
            </div>

            <div className="">
              <span className="font-medium text-xs text-gray-600">
                Organizer by:
              </span>
              <span className="text-xs text-gray-600">{` ${data.contact_name} from ${data.organizer}`}</span>
              {data?.iau_member && data?.iau_member?.region_id && (
                <Link
                  href={`/nocs-network/${regions[data?.iau_member?.region_id]}/${data?.iau_member?.slug}`}
                >
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-blue-600 ring-1 ring-blue-500/10 ring-inset">
                    IAU Member: NOC {data?.iau_member?.name}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="flex-1 flex flex-col justify-between p-4 gap-4">
          <div className="space-y-4">
            <div className="space-y-4">
              <h2 className="text-h4 text-primary-main capitalize line-clamp-3 font-semibold">
                {data.name}
              </h2>

              <div className="flex gap-2 flex-wrap mt-2">
                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">
                  {eventTypes[data.location_of_event] || ""}
                </span>

                {isPastDate(data.start_date) && (
                  <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-800 ring-1 ring-red-600/20 ring-inset">
                    Event Past
                  </span>
                )}

                {data.categories?.map((category) => (
                  <span
                    key={`${data.id}-${category.name}`}
                    className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset"
                  >
                    {category.name}
                  </span>
                ))}
              </div>

              {/* Keywords */}
              {data.keywords?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  <span className="font-medium text-xs text-gray-600">
                    Keywords:
                  </span>
                  {data.keywords.map((keyword) => (
                    <span
                      key={`${data.id}-${keyword}`}
                      className="text-xs text-primary-light"
                    >
                      #{keyword}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {data.brief_description && (
              <p className="text-p text-gray-600">{data.brief_description}</p>
            )}
          </div>

          <div className="flex flex-wrap justify-end gap-x-8 gap-y-2 items-center">
            <Link
              href={`mailto:${data.contact_email}`}
              target="_blank"
              className="text-p hover:text-primary-main flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faEnvelope} size="xs" />
              <span>Contact organizer</span>
            </Link>
            {data.website && (
              <Link
                href={data.website}
                target="_blank"
                className="text-p hover:text-primary-main flex items-center gap-2"
              >
                <span>More about this event</span>
                <FontAwesomeIcon icon={faChevronRight} size="xs" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventContainer;
