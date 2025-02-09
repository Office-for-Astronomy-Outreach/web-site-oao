import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";
import Banner from "@/components/Banner";
import { useState } from "react";
import Button from "@/components/Button";
import BlueDotAnimation from "@/animations/BlueDotAnimation";
import { title } from "process";
import ContentCard from "@/components/ContentCard";
import classNames from "classnames";
import BackgroundImg from "@/components/BackgroundImg";

export default function OneHundredHoursOfAstronomy() {
  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const [copySuccess, setCopySuccess] = useState("");

  // Function to copy hashtag to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => setCopySuccess("Copied!"),
      (err) => setCopySuccess("Failed to copy!")
    );
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Outreach", href: "/outreach" },
  ];

  const contentTitle = [
    {
      title: "100 Years of the Planetarium",
      id: "planetarium-title",
    },
    {
      title: "This Year's Events and Activity Ideas",
      id: "events-title",
    },
    {
      title: "Getting Involved",
      id: "involved-title",
    },
    {
      title: "Let Us Share Your Work!",
      id: "share-title",
    },
    {
      title: " OAO Outreach Activity Toolkit",
      id: "toolkit-title",
    },
    {
      title: "Calendar of Astronomy Events",
      id: "calendar-title",
    },
    {
      title: " More Information",
      id: "more-info-title",
    },
  ];

  const containerClass = classNames(
    "md:container",
    "md:mx-auto mx-2",
    "my-16",
    "md:px-4",
    "py-2",
    "flex flex-col gap-24"
  );

  return (
    <>
      {/* Hero Section */}
      <Banner
        image={{ urlImage: `${path}/images/global-programs/100 hours.png` }}
        title="100 hours for astronomy"
        breadcrumbs={breadcrumbs}
      />

      <div className={containerClass}>
        <ContentCard
          title="100 Hours of Astronomy"
          text={
            <>
              <p className="mb-4">
                Each year, the Office for Astronomy Outreach (OAO) organises 100
                Hours of Astronomy, a global event that invites people of all
                ages and cultures to connect with the night sky and the science
                behind the stars. This event aims to spark scientific curiosity
                and bring astronomy to communities worldwide, from bustling
                cities to the most remote areas. Through public observation
                events, workshops, talks, and educational activities, 100 Hours
                of Astronomy facilitates shared experiences that inspire
                exploration of the Universe and encourage reflection on our
                place within it.
              </p>

              <p>
                Since its inception during the International Year of Astronomy
                2009, 100 Hours of Astronomy has shown that astronomy connects
                us to the stars and one another, becoming a universal
                celebration of knowledge and cooperation. By reminding us that
                we all look up at the same sky, we aim to foster community
                bonds, promote interest in scientific education, and cultivate a
                sense of global belonging. Anyone interested in engaging the
                public with astronomy can propose an event and join this
                international network, making 100 Hours of Astronomy a truly
                inclusive and collaborative celebration.
              </p>
            </>
          }
          type="secondary"
          twoColums
          wfull
        />

        <BackgroundImg
          title={""}
          text={""}
          image={{
            imageUrl: `${path}/images/global-programs/100 hours.png`,
            caption: "",
            alt: "",
            position: "",
          }}
        />
        <div className="flex md:flex-row flex-col gap-16 px-8">
          <article className="">
            <h2
              id="planetarium-title"
              className="text-h2 font-bold scroll-mt-24 mb-8"
            >
              100 Years of the Planetarium
            </h2>
            <div className="sm:float-right max-md:w-full">
              <div className="md:ml-8 mb-8">
                <details className="group p-6 shadow-md rounded-lg w-full" open>
                  <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                    Content
                    <svg
                      className="w-5 h-5 transition-transform transform group-open:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <ul className="mt-4 ml-4 space-y-2">
                    {contentTitle.map(({ title, id }) => (
                      <li key={id} className="list-disc">
                        <a
                          href={`#${id}`}
                          className="text-gray-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                          {title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>

            <p className="mb-8">
              From 2 to 5 October 2025, join the IAU Office for Astronomy
              Outreach for a 100-hour, round-the-clock, round-the-globe
              celebration of astronomy. This event aims to engage as many people
              as possible—from children to seniors—with the sky and our
              astronomical surroundings.
            </p>
            <p className="mb-8">
              <strong>Planetariums</strong> have long been a source of
              inspiration for children and adults alike. In 1923, the first
              planetarium projector was invented in Jena, Germany, and two years
              later, the first planetarium opened its doors in Munich. Between
              2023 and 2025, the world celebrates the centennial of the
              planetarium and the countless ways planetariums have impacted
              society. This year, the IAU Office for Astronomy Outreach (OAO)
              will team up with the International Planetarium Society (IPS) to
              continue the legacy of 100 Hours of Astronomy and celebrate 100
              Years of the Planetarium!
            </p>

            <p className="mb-8">
              With the increasing levels of light pollution worldwide, it is
              impossible to experience a truly dark sky in many places.
              Planetariums are then dark sky oases: sanctuaries for night sky
              enthusiasts, exposing the public to the Universe. Even in
              locations where skies are protected from city lights, planetariums
              are still powerful educational tools for understanding the
              Universe and our place within it. This year, we encourage everyone
              to visit their local planetarium—small, large, mobile, or
              stationary—and immerse themselves in the wonders of our Universe.
            </p>

            <p>
              The OAO and IPS hope to activate planetariums worldwide to
              participate in this programme.
            </p>
          </article>
        </div>

        {/* Third Section: Event Ideas */}
        <ContentCard
          title="This Year's Events and Activity Ideas"
          text={<em>Coming soon!</em>}
          type="primary"
          wfull
        />

        <div className="flex md:flex-row flex-col gap-16">
          <div className="flex flex-col gap-16 w-full">
            <section
              aria-labelledby="involved-title"
              className="flex flex-col gap-8"
            >
              <h2
                id="involved-title"
                className="text-h2 font-bold scroll-mt-24"
              >
                Getting Involved Is Easy!
              </h2>

              <ul aria-labelledby="event-list">
                <li>
                  Be safe, be inclusive, and share your event with the world!
                </li>
              </ul>

              <h3 id="global-event-title" className="text-h3 text-primary-main">
                How can you be part of a global event?
              </h3>

              <ol
                className="list-inside list-decimal"
                aria-labelledby="event-steps"
              >
                <li className="mb-4">
                  Plan a special event during 100 Hours of Astronomy, or
                  identify a pre-existing event you&apos;d like to highlight
                  during this time.
                </li>
                <li className="mb-4">Download the media kit.</li>
                <li className="mb-4">
                  Promote your event alongside 100 Hours of Astronomy using the
                  hashtag{" "}
                  <span className="text-primary-main italic">
                    #100HoursOfAstronomy
                  </span>
                  !
                </li>
              </ol>

              <p>
                To highlight all the amazing activities happening around the
                globe, we will promote a calendar of events displayed on a world
                map.
              </p>

              <p>
                We encourage you to share your events and participate in this
                year’s 100 Hours of Astronomy! If your event is open to the
                public, please leave enough information for people to get
                involved—both in person and online!
              </p>

              <p>
                While the 2025 100 Hours of Astronomy theme is{" "}
                <em className="text-primary-main">
                  “100 Years of the Planetarium,”
                </em>{" "}
                the spirit of this programme is to bring people together through
                the awe astronomy inspires in us all. We hope people worldwide
                will spread their love for astronomy, whether under the dome or
                our shared sky!
              </p>

              <p>
                By submitting your event, you consent to participate in the OAO
                initiatives. Verified submissions will be added to the Women and
                Girls in Astronomy homepage calendar. If your event is open to
                the public, leave enough information for people to get involved
                - both in person and online!
              </p>

              <p>
                Moreover, we aim to promote every event on social media. If
                pictures are available, you can share your initiative with over
                15,000 people on social media.
              </p>

              <p>
                <em>The submissions must be written in English.</em> If you
                cannot translate the information for your event, please use an
                online translator like Google Translate or DeepL.
              </p>
            </section>

            <p>Please note that we may copy-edit some content if needed.</p>

            {/* Calendar Section */}
            <section
              aria-labelledby="calendar-title"
              className="flex flex-col gap-8"
            >
              <h2
                id="calendar-title"
                className="text-h2 font-bold scroll-mt-24"
              >
                Calendar of Astronomy Events
              </h2>

              <p>
                To highlight all the amazing activities happening around the
                globe, we will promote a calendar of events displayed on a world
                map and our social media channels. We encourage you to share
                your events and participate in this year&apos;s 100 Hours of
                Astronomy! If your event is open to the public, please leave
                enough information for people to get involved—both in person and
                online! Be safe, be inclusive, and share your event with the
                world! Add your event at this link.
              </p>
            </section>

            {/* Share Section */}
            <section
              aria-labelledby="share-title"
              className="flex flex-col gap-8"
            >
              <h2 id="share-title" className="text-h2 font-bold scroll-mt-24">
                Let Us Share Your Work!
              </h2>
              <p>
                When spreading the word about your event on social media, use
                the hashtags{" "}
                <span className="text-primary-main italic">
                  #100HoursOfAstronomy
                </span>{" "}
                and{" "}
                <span className="text-primary-main italic">#IAUoutreach</span>{" "}
                so we can help promote your activity, too! All activities
                registered on our events calendar will be shared on the OAO
                social media channels.
              </p>
              <div>
                <Button
                  onClick={() =>
                    copyToClipboard("#100HoursOfAstronomy #IAUoutreach")
                  }
                  className="bg-primary-main text-white px-4 py-2 mt-4 hover:bg-primary-dark"
                  label={"Copy Hashtag"}
                />

                {copySuccess && (
                  <p className="mt-2 text-green-600">{copySuccess}</p>
                )}
              </div>
            </section>

            {/* Toolkit Section */}
            <section
              aria-labelledby="toolkit-title"
              className="flex flex-col gap-8"
            >
              <h2 id="toolkit-title" className="text-h2 font-bold scroll-mt-24">
                OAO Outreach Activity Toolkit
              </h2>

              <p>
                This toolkit compiles crowdsourced astronomy outreach activities
                that can be implemented during one of the IAU Global Outreach
                Events.
              </p>

              <p>
                We invite you to experiment with the featured activities and
                share your ideas by contributing to the Toolkit!
              </p>
              <div className="flex gap-8 sm:flex-row flex-col">
                <Button label={"Go to Toolkit"} color="primary" />
                <Button label={"Dowdload Toolkit"} color="dark" />
              </div>
            </section>

            {/* More Information Section */}
            <section
              aria-labelledby="more-info-title"
              className="flex flex-col gap-8"
            >
              <h2
                id="more-info-title"
                className="text-h2 font-bold scroll-mt-24"
              >
                More Information
              </h2>

              <p>
                All events must respect the general guidelines of the IAU Global
                Outreach initiatives, which promote the key role of astronomy
                for the betterment of science and society through collaboration
                and with a spirit of respect, tolerance, and peace.
              </p>

              <p>
                If you need to change your events already on the calendar,
                please email the IAU Office for Astronomy Outreach Team via{" "}
                <a href="mailto:public@oao.iau.org">public@oao.iau.org</a> with
                the subject line “100 Hours of Astronomy Calendar 2025 -
                Update”. If you cannot submit through this form, please email
                the IAU Office for Astronomy Outreach team via{" "}
                <a href="mailto:public@oao.iau.org">public@oao.iau.org</a> with
                the subject line “100 Hours of Astronomy Calendar 2025 -
                Submit”.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
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
