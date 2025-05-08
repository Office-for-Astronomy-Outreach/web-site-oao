import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { faEnvelopeSquare, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";

import { CountryData, Event } from "@/types";
import Banner from "@/components/Banner";
import CardNocMember from "@/components/CardNocMember";
import EmailDisplay from "@/components/EmailDisplay";
import EventContainer from "@/components/Event";
import { projectPath } from "@/utils/path";

const RegionPage = () => {
  const router = useRouter();
  const { region, country } = router.query; // Gets the region in the URL

  const [countryData, setCountryData] = useState<CountryData>();
  const [eventsData, setEventsData] = useState<Event[]>([]);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch(
          `https://api.iauoutreach.org/countries/${country}`
        );
        if (response.ok) {
          const data = await response.json();
          setCountryData(data);

          const eventsResponse = await fetch(
            `https://api.iauoutreach.org/events?iau_member=${data?.country.id}`
          );

          if (eventsResponse.ok) {
            const events = await eventsResponse.json();
            setEventsData(events.events);
          }
        } else {
          // eslint-disable-next-line no-console
          console.error("Failed to fetch regions");
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error fetching data: ", error);
      }
    };

    if (router.isReady) {
      fetchRegions();
    }
  }, [country, region, router.isReady]);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Nocs Network", href: "/nocs-network" },
    {
      label: `${region}`,
      href: `/nocs-network/${region}`,
    },
    {
      label: `${country}`,
      href: `/nocs-network/${region}/${country}`,
    },
  ];

  const containerClass = classNames(
    "md:container",
    "md:mx-auto mx-2",
    "my-16",
    "md:px-4",
    "py-2",
    "flex flex-col gap-32"
  );

  return (
    <>
      {/* Hero Section */}
      <Banner
        image={{
          urlImage: `${projectPath}/images/nocs-network/noc-background.jpg`,
          alt: "",
        }}
        title={
          <div>
            <span className="text-p">National Outreach Coordinator</span> <br />
            {countryData?.country.name}
          </div>
        }
        breadcrumbs={breadcrumbs}
      />

      <div className={containerClass}>
        <div className="space-y-8 px-8">
          <h2 className="capitalize text-h2 font-bold w-full">
            {countryData?.country.name || ""}
          </h2>
          <div className="flex md:flex-row flex-col gap-8">
            <div className="flex-1">
              <p className="xl:text-h5 text-p text-gray-600">
                {countryData?.country.description || ""}
              </p>
            </div>
            <div className="aspect-video bg-white relative md:w-1/2 w-full h-auto rounded-lg shadow-sm">
              <Image
                src={countryData?.country?.url_img || ""}
                alt={"logo"}
                style={{ objectFit: "contain" }}
                sizes="(max-width: 1200px) 100vw"
                fill
                priority
                className="p-8"
              />
            </div>
          </div>
        </div>

        {countryData && countryData.activer_members.length > 0 && (
          <div className="space-y-8">
            <div className="flex flex-col gap-8 px-8">
              <h2 className="capitalize text-h2 font-bold md:w-1/2 w-full">
                National Outreach Coordinators of {country}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
              {countryData?.activer_members.map((member, index) => (
                <CardNocMember
                  key={index}
                  name={member.name}
                  role={member?.role}
                  image={member?.url_image ?? ""}
                  affiliation={member?.affiliation}
                  email={member?.email}
                  description={member?.description ?? ""}
                  appointedStart={member?.appointed_start}
                  appointedEnd={member?.appointed_end}
                />
              ))}
            </div>
          </div>
        )}

        {countryData?.others_members &&
          countryData?.others_members.length > 0 && (
            <div className="flex flex-col gap-8">
              <h2 className="capitalize text-h2 font-bold md:w-1/2 w-full  px-8">
                Former members of the society
              </h2>
              <div className="relative rounded-xl overflow-auto shadow-sm">
                <table className="border-collapse table-auto w-full text-gray-600 bg-white">
                  <thead className="bg-primary-main">
                    <tr>
                      <th className="p-4 text-left text-white">Name</th>
                      <th className="p-4 text-left text-white">Position</th>
                      <th className="p-4 text-left text-white">Affiliation</th>
                      <th className="p-4 text-left text-white">Email</th>
                      <th className="p-4 text-left text-white">Appointed in</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countryData?.others_members.map((member, index) => (
                      <tr key={index}>
                        <td className="p-4">{member.name}</td>
                        <td className="p-4">{member?.role}</td>
                        <td className="p-4">{member.affiliation}</td>
                        <td className="p-4">
                          {member?.email && (
                            <EmailDisplay email={member?.email} />
                          )}
                        </td>
                        <td className="p-4">
                          {member?.appointed_start} until{" "}
                          {member?.appointed_end}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        {/*<div className="space-y-8">
          <h2 className="capitalize text-h2 font-bold md:w-2/3 w-full px-8">
            Images of Activites in {countryData?.country.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
           images.map((item, index) => (
              <figure key={index} className="content-card-img group w-full">
                <div className="h-[250px] w-full relative rounded">
                  <Image
                    src={item.src}
                    alt={item?.alt ?? ""}
                    layout="fill"
                    style={{ objectFit: "cover" }}
                    className="rounded"
                  />
                  {item?.caption && item.caption.length > 0 && (
                    <figcaption className="absolute z-[1] bottom-0 left-0 w-full bg-black/60 p-2 text-sm text-center text-white rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.caption}
                    </figcaption>
                  )}
                </div>
              </figure>
            ))
          </div>
        </div>*/}

        {eventsData && eventsData.length >= 1 && (
          <>
            <div className="space-y-8">
              <h2 className="capitalize text-h2 font-bold md:w-2/3 w-full px-8">
                Recent events
              </h2>

              {eventsData?.map((event) => (
                <EventContainer
                  data={event as unknown as Event}
                  key={event?.id}
                />
              ))}
            </div>
          </>
        )}

        {countryData?.country?.webSite ||
          countryData?.country?.email ||
          (countryData?.social_media && (
            <div className="space-y-8">
              <h2 className="capitalize text-h2 font-bold md:w-2/3 w-full px-8">
                Contact Noc Mexico through
              </h2>
              <div className="flex flex-wrap gap-4 text-gray-700">
                {countryData?.country?.webSite && (
                  <Link
                    href={countryData?.country?.webSite}
                    className="hover:text-primary-main flex gap-4 items-center  bg-white p-4 rounded shadow-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Go to our website`}
                  >
                    <FontAwesomeIcon icon={faLink} size="3x" />
                    {countryData?.country?.webSite}
                  </Link>
                )}
                {countryData?.country?.email && (
                  <div
                    className="hover:text-primary-main flex gap-4 items-center bg-white p-4 rounded shadow-sm"
                    aria-label={`Follow us on facebook`}
                  >
                    <FontAwesomeIcon icon={faEnvelopeSquare} size="3x" />
                    <EmailDisplay email={countryData?.country?.email} />
                  </div>
                )}
                {countryData?.social_media?.facebook && (
                  <Link
                    href={countryData?.social_media?.facebook}
                    className="hover:text-primary-main flex gap-4 items-center  bg-white p-4 rounded shadow-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on facebook`}
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                    {countryData?.social_media.facebook}
                  </Link>
                )}
                {countryData?.social_media?.instagram && (
                  <Link
                    href={countryData?.social_media?.instagram}
                    className="hover:text-primary-main flex gap-4 items-center  bg-white p-4 rounded shadow-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on facebook`}
                  >
                    <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
                    {countryData?.social_media.instagram}
                  </Link>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default RegionPage;

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
