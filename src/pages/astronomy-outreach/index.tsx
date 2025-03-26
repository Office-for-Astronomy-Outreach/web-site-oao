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

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
const ITEMS_PER_PAGE = 20;

const ejemplo = {
  events: [
    {
      id: 22,
      name: "Galileo In Memoriam 2025",
      country: "Guatemala",
      city: "Ciudad de Guatemala",
      latitude: "14.6349149",
      longitude: "-90.5068824",
      brief_description:
        "On January 7, 1610, Galileo observed the planet Jupiter for the first time and discovered something important—something that would forever change humanity’s understanding of the Universe. Galileo discovered Jupiter’s largest moons and confirmed that they orbited around the planet, contradicting what had been taught for centuries: that Earth was the center of the universe, and that everything revolved around it—absolutely everything. 415 years later, students from the Institute for Research in",
      start_date: "2025-03-24",
      end_date: "2025-03-30",
      website:
        "https://drive.google.com/file/d/12CCxxEl852f6PYujwp-GQEIHmXPrbffz/view?usp=drive_link",
      organizer: "Ejemplo de intitulo",
      contact_name: "Montserrat Delgado ",
      contact_email: "mdanatg@gmail.com",
      location_of_event: "in_person",
      keywords: ["keyword1", "keyword2"],
      participants: 20,
      iau_member: {
        id: 42,
        name: "Guatemala",
        slug: "guatemala",
        description: null,
        url_img: null,
        web_site: null,
        region_id: 2,
        created_at: "2025-01-17T17:50:15.595Z",
        updated_at: "2025-01-17T17:50:15.595Z",
      },
      active: true,
      created_at: "2025-03-24T20:23:08.619Z",
      updated_at: "2025-03-24T20:23:08.619Z",
      event_image_url: null,
      categories: [
        {
          id: 9,
          name: "Star Parties/Stargazing",
          created_at: "2025-02-27T04:31:46.995Z",
          updated_at: "2025-02-27T04:31:46.995Z",
        },
      ],
    },
    {
      id: 21,
      name: "Women and Girls in Astronomy ",
      country: "Hungría",
      city: "Budapest",
      latitude: "47.497912",
      longitude: "19.040235",
      brief_description:
        "On the occasion of the World Astronomy Day, we will be hosting two young researchers, Bernadett Pál, postdoctoral researcher at the Konkoly Institute of Astronomy, and Petra Sági, demonstrator of the Konkoly Student Programme. They will be joined by O. Norton Szabó to discuss the opportunities and challenges of being a woman in such a wonderful life journey. During the talk they'll also be unpacking a LEGO Mars space station and rocket set together!",
      start_date: "2025-03-19",
      end_date: "2025-03-20",
      website:
        "https://www.facebook.com/events/1565306950794854/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22%5B%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A1827235084720212%7D%7D%5D%22%7D",
      organizer: "Svábhegyi Observatory",
      contact_name: "Aron Keve Kiss ",
      contact_email: "mdanatg@gmail.com",
      location_of_event: "hybrid",
      keywords: [
        "women in astronomy",
        "astronomy for all",
        "STEM",
        "astrophotography",
      ],
      participants: 100,
      iau_member: {
        id: 1,
        name: "Algeria",
        slug: "algeria",
        description: null,
        url_img: null,
        web_site: null,
        region_id: 1,
        created_at: "2025-01-17T17:50:15.450Z",
        updated_at: "2025-01-17T17:50:15.450Z",
      },
      active: true,
      created_at: "2025-03-05T02:31:52.632Z",
      updated_at: "2025-03-05T02:31:52.632Z",
      event_image_url: null,
      categories: [
        {
          id: 7,
          name: "Open Days",
          created_at: "2025-02-27T04:31:46.991Z",
          updated_at: "2025-02-27T04:31:46.991Z",
        },
        {
          id: 12,
          name: "Workshop",
          created_at: "2025-02-27T04:31:47.001Z",
          updated_at: "2025-02-27T04:31:47.001Z",
        },
        {
          id: 16,
          name: "Contest",
          created_at: "2025-02-27T04:31:47.007Z",
          updated_at: "2025-02-27T04:31:47.007Z",
        },
      ],
    },
    {
      id: 16,
      name: "Women and girls in astronomy",
      country: "México",
      city: "Guadalajara",
      latitude: "20.6751707",
      longitude: "-103.3473385",
      brief_description:
        "On the occasion of the International Day of Women and Girls in Science, the Syrian Astronomical Society hosted a group of women and girls of various age groups and academic backgrounds, starting from the age of 15 and above, at the Syrian Astronomical Observatory in Damascus. The event included an introduction to the reason behind the global celebration of this day, a glimpse into the most significant contributions of women in the field of space and astronomical sciences, and a 3D tour of the planets in the solar system. Participants also learned about the lives of astronauts, the differences between asteroids, meteors, meteorites, and comets, and an explanation of how the Moon and its craters were formed. The event concluded with an observation of the Moon and the planets visible in the sky, including Venus, Mars, and the stars of the Orion constellation.",
      start_date: "2025-03-03",
      end_date: "2025-03-28",
      website: "http://ejemplo.com",
      organizer: "Noc Mexico",
      contact_name: "Cintía Duran",
      contact_email: "mdanatg@gmail.com",
      location_of_event: "hybrid",
      keywords: [
        "women in astronomy",
        "astronomy for all",
        "STEM",
        "astrophotography",
      ],
      participants: 213,
      iau_member: null,
      active: true,
      created_at: "2025-03-03T19:17:30.745Z",
      updated_at: "2025-03-03T19:17:30.807Z",
      event_image_url: null,
      categories: [
        {
          id: 5,
          name: "Outreach Activities for Development",
          created_at: "2025-02-27T04:31:46.988Z",
          updated_at: "2025-02-27T04:31:46.988Z",
        },
        {
          id: 10,
          name: "Lecture",
          created_at: "2025-02-27T04:31:46.997Z",
          updated_at: "2025-02-27T04:31:46.997Z",
        },
      ],
    },
    {
      id: 5,
      name: "Una Ventana Al Universo - FM Radio",
      country: "México",
      city: "Guadalajara",
      latitude: "20.6751707",
      longitude: "-103.3473385",
      brief_description:
        "Esta tarde de domingo de astronomía te invitamos a escuchar 'Una Ventana Al Universo - FM Radio' Conversaremos sobre el Maratón Messier con Gerardo Rizo y la Sociedad Astronómica Guadalajara, A.C.",
      start_date: "2025-03-01",
      end_date: "2025-03-02",
      website: "http://ejemplo.com",
      organizer: "ejemplo",
      contact_name: "adad",
      contact_email: "mdanatg@gmail.com",
      location_of_event: "online",
      keywords: ["astronomy"],
      participants: 46,
      iau_member: {
        id: 46,
        name: "Mexico",
        slug: "mexico",
        description: null,
        url_img: null,
        web_site: null,
        region_id: 2,
        created_at: "2025-01-17T17:50:15.609Z",
        updated_at: "2025-01-17T17:50:15.609Z",
      },
      active: true,
      created_at: "2025-02-28T08:10:26.549Z",
      updated_at: "2025-02-28T08:10:26.549Z",
      event_image_url: null,
      categories: [
        {
          id: 5,
          name: "Outreach Activities for Development",
          created_at: "2025-02-27T04:31:46.988Z",
          updated_at: "2025-02-27T04:31:46.988Z",
        },
      ],
    },
  ],
  countries: ["Guatemala", "Hungría", "México"],
};

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

  const downloadImages = () => {
    logos.forEach(({ url, name }) => {
      const link = document.createElement("a");
      Object.assign(link, { href: url, download: name });
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

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
                onClick={downloadImages}
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
                      onChange={(selected) =>
                        setFilters((prev) => ({
                          ...prev,
                          categories: selected
                            ? selected.map((item) => item.value)
                            : [],
                        }))
                      }
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
