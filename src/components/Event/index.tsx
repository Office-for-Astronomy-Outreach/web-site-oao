import Image from "next/image";
import { Event, TypeEvent } from "@/types";
import Link from "next/link";

export interface EventProps {
  data: Event;
}

const EventContainer: React.FC<EventProps> = ({ data }) => {
  const date = new Date(data.start_date + "T00:00:00.000Z");

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC",
  });

  const formattedDate = formatter.format(date);

  const typeEvent = (type: string) => {
    const eventTypes: Record<string, string> = {
      [TypeEvent.in_person]: "In person",
      [TypeEvent.online]: "Online",
      [TypeEvent.hybrid]: "Hybrid",
    };

    return eventTypes[type] || "";
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="flex md:flex-row flex-col gap-4">
        <div className="md:w-40 w-full">
          {data?.event_image_url && data?.event_image_url.length > 0 ? (
            <div className="relative aspect-square">
              <Image
                src={`http://127.0.0.1:3001${data?.event_image_url}`}
                alt="alt"
                className="md:rounded-ss-lg md:rounded-t-none rounded-t-lg"
                style={{ objectFit: "cover" }}
                fill
              />
              <div className="absolute w-10 bg-primary-main md:rounded-ss-lg md:rounded-t-none rounded-t-lg">
                <time
                  className="uppercase text-center text-white text-xs p-2 flex"
                  dateTime={data?.start_date}
                >
                  {formattedDate}
                </time>
              </div>
            </div>
          ) : (
            <div className="flex items-center bg-primary-main md:aspect-square aspect-auto text-center md:rounded-ss-lg md:rounded-t-none rounded-t-lg">
              <time
                className="text-2xl text-white uppercase p-8 text-center w-full"
                dateTime={data?.start_date}
              >
                {formattedDate}
              </time>
            </div>
          )}
        </div>
        <div className="flex-1 p-4 space-y-4">
          <div>
            <h2 className="text-h4 text-primary-main capitalize line-clamp-3">
              <span>{data?.name}</span>
            </h2>

            <div className="flex gap-2 flex-wrap mt-2">
              <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">
                {typeEvent(data.location_of_event)}
              </span>
              {data?.categories &&
                data?.categories.length > 0 &&
                data?.categories.map((category) => (
                  <span
                    key={`${data.id}-${category.name}`}
                    className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset"
                  >
                    {category.name}
                  </span>
                ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap">
              <div className="flex gap-2 items-center me-4">
                <span className="font-medium text-xs text-gray-600">
                  Locale:
                </span>
                <span className="text-xs text-gray-600">
                  {data.city}, {data.country}
                </span>
              </div>
              <div className="flex gap-2 items-center mt-1">
                <span className="font-medium text-xs text-gray-600">Date:</span>
                <time
                  className="uppercase text-center text-xs text-gray-600"
                  dateTime={data?.start_date}
                >
                  {data?.start_date}
                </time>
                <span>-</span>
                <time
                  className="uppercase text-center text-xs text-gray-600"
                  dateTime={data?.end_date}
                >
                  {data?.end_date}
                </time>
              </div>
            </div>

            <div className="flex gap-2 items-center mt-1">
              <span className="font-medium text-xs text-gray-600">
                Organizer:
              </span>
              <span className="text-center text-xs text-gray-600">
                {data.contact_name} - {data.organizer}
              </span>
            </div>

            <div className="mt-2">
              <div className="flex flex-wrap gap-2">
                <span className="font-medium text-xs text-gray-600">
                  Keywords:
                </span>
                {data?.keywords &&
                  data?.keywords.length > 0 &&
                  data?.keywords.map((keyword) => (
                    <span
                      key={`${data.id}-${keyword}`}
                      className="text-center text-xs text-gray-600"
                    >
                      #{keyword}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 space-y-4">
        <p className="text-p text-gray-600">{data?.brief_description}</p>

        <div className="pb-4">
          <Link
            href={data.website}
            target="_black"
            className="text-p hover:text-primary-main"
          >
            More about this event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventContainer;
