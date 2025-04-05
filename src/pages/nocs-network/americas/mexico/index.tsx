import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import { useState } from "react";
import { Event, TypeEvent } from "@/types";

import Image from "next/image";
import Banner from "@/components/Banner";
import classNames from "classnames";
import CardNocMember from "@/components/CardNocMember";

import { typeMember } from "@/types";
import EmailDisplay from "@/components/EmailDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import EventContainer from "@/components/Event";

const RegionPage = () => {
  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const events = [
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
      organizer: "Noc Mexico",
      contact_name: "Cintía Duran",
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
  ];

  const [countryData] = useState({
    country: {
      id: 46,
      name: "Mexico",
      slug: "mexico",
      description:
        "NOC Mexico has been actively promoting astronomical knowledge both nationally and internationally. Through collaboration with universities, observatories, and scientific organizations, we strive to expand access to astronomy and inspire interest in future generations. One of our main objectives is to support educational and outreach initiatives that bring astronomy closer to Mexican society. Beyond being a fascinating science, we believe astronomy is a powerful tool to spark curiosity, foster critical thinking, and drive technological innovation in our country.",
      url_img: `${path}/images/nocs/Mexico/oao-mexico.png`,
      web_site: null,
      region_id: 2,
      created_at: "2025-01-17T17:50:15.585Z",
      updated_at: "2025-01-17T17:50:15.585Z",
    },
    activer_members: [
      {
        id: 1,
        name: "Cintia Durán",
        affiliation: "IAU / Tlaloque",
        url_image: `${path}/images/nocs/Mexico/nocs/CintiaDuran.jpeg`,
        email: "carrillo.du@gmail.com",
        description:
          "Cintia Duran, educator, researcher and currently International Outreach Officer at the International Astronomical Union's Office for Astronomy Outreach (OAO-IAU). Her work focuses on developing innovative strategies to bring astronomy closer to diverse audiences, promoting inclusion and cultural diversity in science. With experience in science communication, educational methodologies, and inclusive design, she has led global projects that strengthen the connection between society and the exploration of the universe.",
        active: true,
        role: "co-coordinator",
        appointed_start: "2024-08-01",
        appointed_end: "2027-08-01",
        country_id: 46,
        created_at: "2025-01-17T17:50:15.585Z",
        updated_at: "2025-01-17T17:50:15.585Z",
      },
      {
        id: 2,
        name: "Anaely Pacheco Blanco",
        affiliation: "",
        url_image: `${path}/images/nocs/Mexico/nocs/AnaelyPacheco.jpg`,
        email: "dc.anaelypb@gmail.com",
        description:
          "Anaely Pacheco Blanco is a science communicator, specialising in astronomy. She holds a degree in Physics from the Benemérita Universidad Autónoma de Puebla (BUAP) and a Master’s in Science with a specialisation in Astrophysics from the National Institute of Astrophysics, Optics, and Electronics (INAOE). She is passionate about promoting equity, diversity, and inclusion in STEM fields, as well as protecting the night sky as a shared heritage. To advance these goals, she founded the association Astronomía sin barreras: Experiencias en un Universo compartido (Astronomy Without Barriers: Experiences in a Shared Universe).",
        active: true,
        role: "committee",
        appointed_start: "2025-03-01",
        appointed_end: "2027-08-01",
        country_id: 46,
        created_at: "2025-01-17T17:50:15.585Z",
        updated_at: "2025-01-17T17:50:15.585Z",
      },
      {
        id: 3,
        name: "Manet Estefanía Peña Salinas",
        affiliation:
          "Instituto de Estudios Avanzados de Baja California, A.C., Laboratorio de Astrobiología, IA-UNAM",
        url_image: `${path}/images/nocs/Mexico/nocs/Manet.jpeg`,
        email: "manetest@astro.unam.mx",
        description:
          "Dr Manet Estefanía Peña Salinas is a biologist from the Faculty of Sciences at UNAM. She earned her MSc in Marine Ecology at the Center for Scientific Research and Higher Education of Ensenada (CICESE) and her PhD in Coastal Oceanography from the Faculty of Marine Sciences at UABC, in co-supervision with the Astrobiology Laboratory at the Institute of Astronomy, UNAM. During her PhD, she conducted a research stay at the California Institute of Technology (Caltech). She has participated in oceanographic expeditions and research projects on extreme ecosystems. Additionally, she has served as the Secretary of Outreach for the Mexican Society of Astrobiology (SOMA) and is part of the science communication team at the Institute for Advanced Studies of Baja California, A.C.",
        active: true,
        role: "co-coordinator",
        appointed_start: "2025-03-01",
        appointed_end: "2027-08-01",
        country_id: 46,
        created_at: "2025-01-17T17:50:15.585Z",
        updated_at: "2025-01-17T17:50:15.585Z",
      },
      {
        id: 4,
        name: "Ana Torres Campos",
        affiliation: "SECIHTI / Freelancer",
        url_image: `${path}/images/nocs/Mexico/nocs/AnaTorres.jpeg`,
        email: "astro@anatorrescampos.com",
        description:
          "Ana Torres Campos is a Telematics Engineer, holds a PhD in Astrophysics, and is a committed feminist. She is currently a Investigadora por México at the Secretariat of Science, Humanities, Technology, and Innovation and collaborates with the IAU's North American Regional Office of Astronomy for Development (NA-ROAD). With over 15 years of experience in astronomy outreach and education, one of her key achievements includes establishing the Social Communication and Digital Media division at the Gran Telescopio Milimétrico (GTM), bringing the telescope's science to nearly all of Mexico.",
        active: true,
        role: "co-coordinator",
        appointed_start: "2025-03-01",
        appointed_end: "2027-08-01",
        country_id: 46,
        created_at: "2025-01-17T17:50:15.585Z",
        updated_at: "2025-01-17T17:50:15.585Z",
      },
      {
        id: 5,
        name: "Durruty Jesús de Alba Martínez",
        affiliation: "Universidad de Guadalajara",
        url_image: `${path}/images/nocs/Mexico/nocs/DurrytyDeAlba.jpeg`,
        email: "durruty.dealba@academicos.udg.mx",
        description:
          "Holds a degree in Physics from the University of Guadalajara (UdeG). He has presented numerous contributions at both national and international conferences on physics, the history of astronomy, and cultural heritage.  Since 1990, he has contributed science articles to El Occidental and currently writes the column El Pegaso de Sigüenza for El Diario NTR and Astronografías for Plumas NCC. He is a Senior Academic Technician ('A') at the Institute of Astronomy and Meteorology, as well as a Lecturer ('B') in the Department of Physics, both at the University of Guadalajara's Center for Exact Sciences and Engineering (CUCEI). He is an ambassador for the Network for Astronomy School Education-IAU and a member of several academic and professional organisations, including the Mexican Society of Physics, the Mexican Society for the History of Science and Technology, the American Physical Society, the Department of Historical Studies of the Archdiocese of Guadalajara, and the Mexican Network of Science Journalists.",
        active: true,
        role: "co-coordinator",
        appointed_start: "2024-08-01",
        appointed_end: "2027-08-01",
        country_id: 46,
        created_at: "2025-01-17T17:50:15.585Z",
        updated_at: "2025-01-17T17:50:15.585Z",
      },
      {
        id: 6,
        name: "Mayra Santiago Cortés",
        affiliation: "Secihti, Independent Researcher",
        url_image: `${path}/images/nocs/Mexico/nocs/Mayra.jpeg`,
        email: "stgo_mayra@yahoo.com.mx",
        description:
          "Dr Mayra Santiago Cortés holds a PhD in Astrophysics from INAOE. Her main interests include science communication and academic training for young people, aiming to spark their interest in scientific careers. She is currently a researcher at Secihti, where she conducts studies on the development of science in Mexico, seeking to promote strategies that strengthen its growth. Additionally, she collaborates with the Astronomy and Community project (@AstroDirMx), which aims to foster collaboration networks in Mexico through astronomy.",
        active: true,
        role: "co-coordinator",
        appointed_start: "2024-08-01",
        appointed_end: "2027-08-01",
        country_id: 46,
        created_at: "2025-01-17T17:50:15.585Z",
        updated_at: "2025-01-17T17:50:15.585Z",
      },
      {
        id: 7,
        name: "Ma. Teresa Orta Arias",
        affiliation: "Planetario SAYAB",
        url_image: `${path}/images/nocs/Mexico/nocs/Tete.jpeg`,
        email: "teteortarias@gmail.com",
        description:
          "She holds a degree in Tourism Management from the Meritorious Autonomous University of Puebla (BUAP) and began her career in science communication in 2009 at the National Institute of Astrophysics, Optics, and Electronics (INAOE). There, she coordinated astronomy events across various regions of Mexico. She also contributed to the logistics of several science workshops for young people and teachers at INAOE, actively participated in organising the International Fair of Reading, Science, and Literature in Tonantzintla (FILEC), and supported various outreach activities by INAOE. She currently works as an observatory assistant at the SAYAB Planetarium in Solidaridad, which is part of the Planetarium Network of Quintana Roo.",
        active: true,
        role: "committee",
        appointed_start: "2024-08-01",
        appointed_end: "2027-08-01",
        country_id: 46,
        created_at: "2025-01-17T17:50:15.585Z",
        updated_at: "2025-01-17T17:50:15.585Z",
      },
      {
        id: 9,
        name: "Tania Arguijo",
        affiliation: "",
        url_image: `${path}/images/nocs/Mexico/nocs/Tania.png`,
        email: "sociedadastronomicanl@gmail.com",
        description: null,
        active: true,
        role: "committee",
        appointed_start: "2025-03-01",
        appointed_end: "2027-08-01",
        country_id: 46,
        created_at: "2025-02-04T00:00:00.000Z",
        updated_at: "2025-02-04T00:00:00.000Z",
      },
    ],
    others_members: [
      {
        id: 10,
        name: "Patricia Hernández Reséndiz",
        affiliation: "UNAM & ASTROFISICOS EN ACCION",
        url_image: `${path}/images/nocs/Mexico/nocs/Tania.png`,
        email: "sociedadastronomicanl@gmail.com",
        description: null,
        active: false,
        role: "former-nocs",
        appointed_start: "2021-03-01",
        appointed_end: "2024-08-01",
        country_id: 46,
        created_at: "2025-02-04T00:00:00.000Z",
        updated_at: "2025-02-04T00:00:00.000Z",
      },
      {
        id: 11,
        name: "René Alberto Ortega Minakata",
        affiliation:
          "Instituto de Radioastronomía y Astrofísica (IRyA) at Universidad Nacional Autónoma de México (UNAM), Campus Morelia",
        url_image: `${path}/images/nocs/Mexico/nocs/Tania.png`,
        email: "r.ortega@irya.unam.mx",
        description: null,
        active: false,
        role: "former-nocs",
        appointed_start: "2018-09-01",
        appointed_end: "2021-08-27",
        country_id: 46,
        created_at: "2025-02-04T00:00:00.000Z",
        updated_at: "2025-02-04T00:00:00.000Z",
      },
      {
        id: 12,
        name: "Alejandro Farah",
        affiliation:
          "Instituto de Astronomía, Universidad Nacional Autonoma de Mexico",
        url_image: `${path}/images/nocs/Mexico/nocs/Tania.png`,
        email: "farah@atastro.unam.mx",
        description: null,
        active: false,
        role: "former-nocs",
        appointed_start: "2021-03-01",
        appointed_end: "2024-08-01",
        country_id: 46,
        created_at: "2025-02-04T00:00:00.000Z",
        updated_at: "2025-02-04T00:00:00.000Z",
      },
    ],
    social_media: {
      id: 1,
      instagram: "https://www.instagram.com/nocmexico/",
      facebook: "https://www.facebook.com/nocmex/",
      x: null,
      youtube: null,
      country_id: 46,
      created_at: "2025-01-18T00:00:00.000Z",
      updated_at: "2025-01-18T00:00:00.000Z",
    },
    region: {
      id: 2,
      name: "Americas",
      slug: "americas",
      created_at: "2025-01-17T04:43:36.550Z",
      updated_at: "2025-01-17T04:43:36.550Z",
    },
  });

  const memberRole = (role: string) => {
    switch (role) {
      case "co-coordinator":
        return "CO-NOC";
      case "coordinator":
        return typeMember.coordinator;
      case "committee":
        return typeMember.committee;
      case "observer":
        return typeMember.observer;
      case "vice":
        return typeMember.vice;

      default:
        return typeMember.observer;
    }
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Nocs Network", href: "/nocs-network" },
    {
      label: "Americas",
      href: `/nocs-network/americas`,
    },
    {
      label: `Mexico`,
      href: `/nocs-network/americas/mexico`,
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

  const images = [
    {
      src: `${path}/images/nocs/Mexico/events/Eclipse.png`,
      width: 320,
      height: 174,
      alt: "Woman watches the total solar eclipse in Guadalajara, Mexico",
      caption: "Woman watches the total solar eclipse in Guadalajara, Mexico",
    },
    {
      src: `${path}/images/nocs/Mexico/events/EclipseSolarGuadalajara2024.jpeg`,
      width: 320,
      height: 174,
      alt: "A group of people watch the total solar eclipse in Guadalajara, Mexico.",
      caption:
        "A group of people watch the total solar eclipse in Guadalajara, Mexico.",
    },
    {
      src: `${path}/images/nocs/Mexico/events/ColaboracionConHackerGarage.jpeg`,
      width: 320,
      height: 274,
      alt: "Prototype of indirect projection observatory used during the solar eclipse in Mexico",
      caption:
        "Prototype of indirect projection observatory used during the solar eclipse in Mexico",
    },
    {
      src: `${path}/images/nocs/Mexico/events/Guadalajara2024.jpeg`,
      width: 320,
      height: 274,
      alt: "Informational poster only about the solar eclipse event in Guadalajara, Mexico",
      caption:
        "Informational poster only about the solar eclipse event in Guadalajara, Mexico",
    },
    {
      src: `${path}/images/nocs/Mexico/events/EventoCienciaPorLaPAZ2024.jpeg`,
      width: 320,
      height: 274,
      alt: "Informational flyer about the event 'Ciencia por la Paz 2024'",
      caption: "Informational flyer about the event 'Ciencia por la Paz 2024'",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Banner
        image={{
          urlImage: `${path}/images/nocs-network/noc-background.jpg`,
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
                src={countryData?.country?.url_img}
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

        <div className="space-y-8">
          <div className="flex flex-col gap-8 px-8">
            <h2 className="capitalize text-h2 font-bold md:w-1/2 w-full">
              Mexico&apos;s National Outreach Coordinators
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
            {countryData &&
              countryData.activer_members.length > 0 &&
              countryData?.activer_members.map((member, index) => (
                <CardNocMember
                  key={index}
                  name={member.name}
                  role={memberRole(member?.role)}
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
                        <td className="p-4">{memberRole(member?.role)}</td>
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

        <div className="space-y-8">
          <h2 className="capitalize text-h2 font-bold md:w-2/3 w-full px-8">
            Images of Activites in {countryData?.country.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((item, index) => (
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
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="capitalize text-h2 font-bold md:w-2/3 w-full px-8">
            Recent events
          </h2>

          {events &&
            events.length >= 1 &&
            events?.map((event) => (
              <EventContainer
                data={event as unknown as Event}
                key={event?.id}
              />
            ))}
        </div>

        <div className="space-y-8">
          <h2 className="capitalize text-h2 font-bold md:w-2/3 w-full px-8">
            Contact Noc Mexico through
          </h2>
          <div className="flex flex-wrap gap-4 text-gray-700">
            <div
              className="hover:text-primary-main flex gap-4 items-center bg-white p-4 rounded shadow-sm"
              aria-label={`Follow us on facebook`}
            >
              <FontAwesomeIcon icon={faEnvelopeSquare} size="3x" />
              <EmailDisplay email="noc.mexico.uai@gmail.com" />
            </div>
            <Link
              href={countryData.social_media.facebook}
              className="hover:text-primary-main flex gap-4 items-center  bg-white p-4 rounded shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on facebook`}
            >
              <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
              {countryData.social_media.facebook}
            </Link>
            <Link
              href={countryData.social_media.instagram}
              className="hover:text-primary-main flex gap-4 items-center  bg-white p-4 rounded shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on facebook`}
            >
              <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
              {countryData.social_media.instagram}
            </Link>
          </div>
        </div>
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
