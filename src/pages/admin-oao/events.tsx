import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import useSWR from "swr";
import { useEffect, useMemo, useState } from "react";

import { projectPath } from "@/utils/path";
import { Event, TypeEvent } from "@/types";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
const ITEMS_PER_PAGE = 20;

export default function CalendarEvent() {
  const {
    data: eventsData,
  }: { data: { events: Event[]; countries: string[] }; isLoading: boolean } =
    useSWR(`${projectPath}/api/events`, fetcher);
  const { data: categoriesData }: { data: { id: number; name: string }[] } =
    useSWR(`${projectPath}/api/categories`, fetcher);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [filters, setFilters] = useState<{
    categories: number[];
    location_of_event: TypeEvent | null;
    country: string | null;
  }>({
    categories: [],
    location_of_event: null,
    country: null,
  });

  const logos = [
    {
      name: "oao-logo-white.png",
      url: `${projectPath}/images/logos/oao-logo-white.png`,
    },
    {
      name: "oao-logo.png",
      url: `${projectPath}/images/logos/logo.png`,
    },
  ];

  const categoryOptions = useMemo(
    () =>
      categoriesData?.map(({ id, name }) => ({ value: id, label: name })) || [],
    [categoriesData]
  );

  const countryOptions = useMemo(
    () =>
      eventsData?.countries?.map((country, index) => ({
        value: index,
        label: country,
      })) || [],
    [eventsData]
  );

  useEffect(() => {
    const applyFilters = () => {
      let filtered = eventsData?.events || [];

      if (filters?.categories?.length > 0) {
        filtered = filtered.filter((event) =>
          event?.categories?.some((category) =>
            filters?.categories.includes(category.id)
          )
        );
      }

      if (filters?.location_of_event) {
        filtered = filtered.filter(
          (event) => event?.location_of_event === filters?.location_of_event
        );
      }

      if (filters?.country) {
        filtered = filtered.filter(
          (event) => event.country === filters?.country
        );
      }

      setCurrentPage(1);
      setFilteredEvents(filtered);
    };

    if (eventsData?.events) {
      applyFilters();
    }
  }, [eventsData?.events, filters]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedEvents = filteredEvents.slice(startIndex, endIndex);
    setCurrentEvents(paginatedEvents);
    setTotalPages(Math.ceil(filteredEvents.length / ITEMS_PER_PAGE));
  }, [currentPage, filteredEvents]);

  return (
    <div>
      <div className="p-4">
        <div className="h-16"></div>

        <div className="flex flex-col gap-6" id="eventsList">
          <div className="px-8">
            <h2 className="font-bold text-md capitalize scroll-mt-32 text-body">
              Upcoming Astronomy Events
            </h2>
          </div>
          <div>
            <table className="table-auto border-collapse w-full text-gray-600 bg-white text-start">
              <thead className="bg-primary-main text-white">
                <tr>
                  <th>Image</th>
                  <th>Name of event</th>
                  <th>Start Date - End Date</th>
                  <th>Location</th>
                  <th>Organizer</th>
                  <th>IAU Member</th>
                  <th>Categories</th>
                  <th>Keywords</th>
                  <th>Location of event</th>
                  <th>Participants</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="">
                {currentEvents && currentEvents.length >= 1 ? (
                  currentEvents?.map((event: Event) => (
                    <tr
                      className="text-sm font-light border-b border-gray-300"
                      key={event.id}
                    >
                      <th className="text-sm font-normal">Image</th>
                      <th className="text-sm font-normal">{event.name}</th>
                      <th className="text-sm font-normal">
                        {event.start_date} to {event.end_date}
                      </th>
                      <th className="text-sm font-normal">
                        {event.country} - {event.city}
                      </th>
                      <th className="text-sm font-normal">{`${event.contact_name} from ${event.organizer}`}</th>
                      <th className="text-sm font-normal">
                        {event?.iau_member?.name || ""}
                      </th>

                      <th className="space-x-1">
                        {event.categories?.map((category) => (
                          <span
                            key={`${event.id}-${category.name}`}
                            className="inline-flex items-center px-1 py-1 text-xs font-medium text-gray-600"
                          >
                            {category.name}
                          </span>
                        ))}
                      </th>
                      <th className="space-x-1">
                        {event.keywords.map((keyword) => (
                          <span
                            key={`${event.id}-${keyword}`}
                            className="text-xs text-primary-light"
                          >
                            #{keyword}
                          </span>
                        ))}
                      </th>
                      <th className="text-sm font-normal">
                        {event.location_of_event}
                      </th>
                      <th className="text-sm font-normal">
                        {event.participants}
                      </th>
                      <th className="text-sm font-normal">
                        <button> Details</button>
                        <button> Edit</button>
                        <button> Approval</button>
                      </th>
                    </tr>
                  ))
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export const get: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, locale, [
        "home",
        "layout",
        "about",
      ])),
    },
  };
};
