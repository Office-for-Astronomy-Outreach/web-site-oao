import Image from "next/image";
import { Event, TypeEvent } from "@/types";
import Link from "next/link";
import { useCallback, useMemo } from "react";
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

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="flex sm:flex-row flex-col gap-4">
        {/* Event Image */}
        <div className="sm:w-40 w-full">
          {data.event_image_url ? (
            <div className="relative aspect-square">
              <Image
                src={`http://127.0.0.1:3001${data.event_image_url}`}
                alt={data.name || "Event image"}
                className="sm:rounded-ss-lg sm:rounded-t-none rounded-t-lg object-cover"
                fill
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
            <div className="flex items-center justify-center bg-primary-main text-white text-2xl uppercase p-8 text-center sm:rounded-ss-lg sm:rounded-t-none rounded-t-lg aspect-square">
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
              <p className="uppercase text-xs text-gray-600">
                <time dateTime={data.start_date}>
                  {formattedDate(startDate)}
                </time>
                <span> to </span>
                <time dateTime={data.end_date}>{formattedDate(endDate)}</time>
              </p>
            </div>

            <div className="">
              <span className="font-medium text-xs text-gray-600">
                Organizer:
              </span>
              <p className="text-xs text-gray-600">{`${data.contact_name}, ${data.organizer}`}</p>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="flex-1 p-4 space-y-4">
          <div className="space-y-4">
            <h2 className="text-h4 text-primary-main capitalize line-clamp-3 font-semibold">
              {data.name}
            </h2>

            <div className="flex gap-2 flex-wrap mt-2">
              <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">
                {eventTypes[data.location_of_event] || ""}
              </span>

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

          <div className="flex justify-end  gap-8">
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
