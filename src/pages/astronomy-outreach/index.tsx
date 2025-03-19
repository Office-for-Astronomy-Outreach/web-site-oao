import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";
import classNames from "classnames";
import Select from "react-select";
import useSWR from "swr";
import { useEffect, useMemo, useState } from "react";

import Banner from "@/components/Banner";
import { projectPath } from "@/utils/path";
import { Event, TypeEvent } from "@/types";
import EmailDisplay from "@/components/EmailDisplay";
import EventContainer from "@/components/Event";
import ContentCard from "@/components/ContentCard";
import EventSkeleton from "@/components/Skeleton/EventSkeleton";
import Button from "@/components/Button";
import FormLabel from "@/components/Label";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const ITEMS_PER_PAGE = 20;

export default function CalendarEvent() {
  const {
    data: eventsData,
    isLoading,
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

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Astronomy Outreach Events", href: "" },
  ];

  const containerClass = classNames(
    "md:container",
    "md:mx-auto mx-2",
    "my-16",
    "md:px-4",
    "py-2",
    "flex flex-col gap-24"
  );

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

  const year = new Date().getFullYear();

  const downloadImage = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const categoryOptions = useMemo(
    () => {
      if(categoriesData && categoriesData.length > 0) {
        return categoriesData?.map(({ id, name }) => ({ value: id, label: name }))
      }

      return []
    },
    [categoriesData]
  );

  const countryOptions = useMemo(
    () => {
      if(eventsData && eventsData?.countries) {
        return eventsData?.countries?.map((country, index) => ({
          value: index,
          label: country,
        }));
      };
      return []
    },
    [eventsData]
  );

  useEffect(() => {
    const applyFilters = () => {
      let filtered = eventsData?.events || [];

      if (filters?.categories?.length > 0) {
        filtered = filtered.filter((event) =>
          event.categories.some((category) =>
            filters?.categories.includes(category.id)
          )
        );
      }

      if (filters?.location_of_event) {
        filtered = filtered.filter(
          (event) => event.location_of_event === filters?.location_of_event
        );
      }

      if (filters?.location_of_event) {
        filtered = filtered.filter(
          (event) => event.location_of_event === filters?.location_of_event
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

    applyFilters();
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
      <Banner
        image={{
          urlImage: `${projectPath}/images/astronomy-outreach-map/background.jpg`,
          caption:
            "Image composition showing all the ESO observatories and the Headquarters. Credit: ESO/M. Kornmesse",
        }}
        title="Astronomy Outreach Events"
        breadcrumbs={breadcrumbs}
      />
      <div className={containerClass}>
        <ContentCard
          title={"IAU Global Outreach Events"}
          text={
            "The IAU Global Outreach Events are international outreach activities supported by the IAU outreach office, with the intent of promoting and disseminating best practices internationally. These events are developed and implemented by independent organisers internationally and we encourage outreach professionals, educators, amateur and professional astronomers, to share their stories and join our inspiring outreach community."
          }
          type={"secondary"}
          wfull
        />

        <ContentCard
          title={"Who can submit an event?"}
          text={
            <div className="space-y-4">
              <p>
                Anyone can submit an event related to astronomy that aligns with
                the IAU Global Outreach initiatives: promoting astronomy for the
                betterment of science and society, through collaboration and
                with a spirit of respect, tolerance and peace.
              </p>
              <p>
                You can register your events in the official IAU Calendar of
                Outreach Global Events for {year}
              </p>
            </div>
          }
          type={"transparent"}
          link={{
            label: "Register your event",
            url: "/astronomy-outreach/events/register",
          }}
          image={{
            imageUrl: `${projectPath}/images/astronomy-outreach-map/astronomy_event.jpg`,
            caption: "",
            alt: "",
          }}
        />

        <ContentCard
          title={"More Information"}
          text={
            <div className="space-y-4">
              <p>
                If you experience any issues accessing our Online Form, please
                send an email to our IAU Office for Astronomy Outreach Team via{" "}
                <EmailDisplay
                  email={"public@oao.iau.org"}
                  color="text-yellow-400"
                />{" "}
                with the subject line “IAU Outreach Event Calendar {year} -
                Request Form”.
              </p>

              <p>
                Note: Once your activity is visible on our event calendar you
                are free to use the IAU Office for Astronomy Outreach Logo in
                your registered events.
              </p>
              <div></div>
              <Button
                label={"Dowlonad OAO Logo"}
                color="dark"
                onClick={() =>
                  logos.forEach(({ url, name }) => downloadImage(url, name))
                }
              />
            </div>
          }
          type={"primary"}
          wfull
        />

        <div className="flex flex-col gap-6" id="eventsList">
          <div className="px-8">
            <h2 className="font-bold text-h2 capitalize scroll-mt-32 text-body">
              Upcoming Astronomy Events
            </h2>
          </div>
          {isLoading ? (
            <>
              <EventSkeleton />
              <EventSkeleton />
              <EventSkeleton />
              <EventSkeleton />
              <EventSkeleton />
            </>
          ) : (
            <>
              {eventsData?.events && eventsData?.events?.length >= 1 && (
                <div className="flex flex-wrap gap-4 p-8">
                  <fieldset className="sm:flex-1 w-full">
                    <FormLabel htmlFor={"category"} className="w-full">
                      Category
                    </FormLabel>
                    <Select
                      name="category"
                      options={categoryOptions}
                      isClearable
                      onChange={(e) => {
                        setFilters({
                          ...filters,
                          categories: e.map((item) => item?.value),
                        });
                      }}
                      isMulti
                      className="w-full"
                    />
                  </fieldset>
                  <fieldset className="sm:flex-1 w-full">
                    <FormLabel htmlFor={"category"} className="w-full">
                      Location of event
                    </FormLabel>
                    <Select
                      name="location_of_event"
                      options={[
                        { value: null, label: "All" },
                        { value: TypeEvent.in_person, label: "In person" },
                        { value: TypeEvent.online, label: "Online" },
                        { value: TypeEvent.hybrid, label: "Hybrid" },
                      ]}
                      onChange={(e) => {
                        setFilters({
                          ...filters,
                          location_of_event: e?.value ?? null,
                        });
                      }}
                      isClearable
                      className="w-full"
                    />
                  </fieldset>
                  <fieldset className="sm:flex-1 w-full">
                    <FormLabel htmlFor={"country"} className="w-full">
                      Country
                    </FormLabel>
                    <Select
                      name="country"
                      options={countryOptions}
                      isClearable
                      onChange={(e) => {
                        setFilters({
                          ...filters,
                          country: e?.label ?? null,
                        });
                      }}
                      className="w-full"
                    />
                  </fieldset>
                </div>
              )}

              <div className="space-y-8">
                {currentEvents && currentEvents.length >= 1 ? (
                  currentEvents?.map((event: Event) => (
                    <EventContainer data={event} key={event?.id} />
                  ))
                ) : (
                  <div className="min-h-32 flex items-center">
                    <p>No se encontro información de eventos disponibles</p>
                  </div>
                )}
              </div>

              {totalPages >= 1 && (
                <div className="flex items-center gap-2 mt-4 justify-center">
                  <button
                    onClick={() => {
                      setCurrentPage((prev) => Math.max(prev - 1, 1));
                      const element = document.getElementById("eventsList");
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    disabled={currentPage === 1}
                    className="px-3 py-2 text-sm border rounded disabled:opacity-50 "
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => {
                          setCurrentPage(page);
                          const element = document.getElementById("eventsList");
                          if (element) {
                            element.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }
                        }}
                        className={`px-3 py-2 text-sm border rounded hover:bg-primary-light hover:border-primary-light ${
                          currentPage === page
                            ? "bg-primary-main text-white border-primary-main"
                            : ""
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  <button
                    onClick={() => {
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                    }}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 text-sm border rounded disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
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
