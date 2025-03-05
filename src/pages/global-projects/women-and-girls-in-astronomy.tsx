import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";
import { useState } from "react";
import type { GetServerSideProps } from "next";
import classNames from "classnames";

import Banner from "@/components/Banner";
import ContentCard from "@/components/ContentCard";
import Button from "@/components/Button";
import BackgroundImg from "@/components/BackgroundImg";
import ActivityCard from "@/components/ActiviyCard";
import EmailDisplay from "@/components/EmailDisplay";
import { projectPath } from "@/utils/path";
import Link from "next/link";

export default function WomenAndGirlsInAstronomy() {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000); // Oculta el mensaje después de 2 segundos
      },
      (_err) => {
        setCopySuccess("Failed to copy!");
        setTimeout(() => setCopySuccess(""), 2000);
      }
    );
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${projectPath}/images/global-programs/Mini-Guide-to-Organizing-an-Astronomy-Outreach-Event.pdf`;
    link.download = "Mini Guide to Organizing an Astronomy Outreach Event.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Public Engagement", href: "/public-engagement" },
    { label: "Global Projects - Women and Girls in Astronomy", href: "" },
  ];

  const contentTitle = [
    {
      title: "Title the women of solar physics",
      id: "title-the-women-of-solar-physics",
    },
    {
      title: "How to participate",
      id: "how-to-participate",
    },
    {
      title: "Ideas for your events",
      id: "ideas-for-your-events",
    },
    {
      title: "Share your event with the world",
      id: "share-your-event-with-the-world",
    },
    {
      title: "Calendar of Astronomy events",
      id: "calendar-of-astronomy-events",
    },
    {
      title: "More Information",
      id: "more-information",
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
        image={{
          urlImage: `${projectPath}/images/global-programs/women-in-astronomy/background.jpg`,
        }}
        title="Women and Girls in Astronomy"
        breadcrumbs={breadcrumbs}
      />

      <div className={containerClass}>
        <ContentCard
          title="About the Event"
          text={
            <div className="flex flex-col gap-4">
              <p>
                Every year, Women and Girls in Astronomy brings together people
                from around the world to celebrate and highlight the
                contributions of women and girls to astronomy.
              </p>
              <p>
                This global event, organised by the IAU Office for Astronomy
                Outreach, aims to inspire new generations, promote gender equity
                in science, and foster a more inclusive astronomical community.
                Through workshops, talks, and participatory activities, we
                connect stories, discoveries, and dreams that remind us the
                Universe is open to everyone.
              </p>
            </div>
          }
          type="secondary"
          twoColums
          wfull
        />

        <BackgroundImg
          title={""}
          text={""}
          image={{
            imageUrl: `${projectPath}/images/global-programs/women-in-astronomy/background-2.png`,
            caption: "",
            alt: "",
          }}
          size="md"
        />

        {/** Theme */}
        <div className="flex md:flex-row flex-col gap-16 md:py-16 py-8 px-8">
          <article>
            <h2
              id="title-the-women-of-solar-physics"
              className="capitalize text-h2 font-bold scroll-mt-24 mb-8"
            >
              The women of solar physics
            </h2>
            <div className="sm:float-right max-md:w-full">
              <div className="md:ml-8 mb-8">
                <details
                  className="group p-6 shadow-md rounded-lg w-full min-w-[300px] bg-white"
                  open
                >
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

            <p className="mb-8 xl:text-h5 text-p text-gray-600">
              In 2025, the Sun will experience a maximum in its activity,
              providing the citizens of Earth with a magnificent show of solar
              events. To celebrate this Solar System-wide event, this year{"'"}s
              Women and Girls in Astronomy events will focus on the women of
              <strong>solar physics.</strong>
            </p>

            <p className="mb-8 xl:text-h5 text-p text-gray-600">
              Will host special events and activities on the International Day
              of Women and Girls in Science <em>(11 February)</em> and
              International Women{"'"}s Day <em>(8 March)</em>, we celebrate
              this theme throughout the year and encourage the public to join us
            </p>
            <Button
              label="Register your event"
              color="primary"
              url="https://docs.google.com/forms/d/e/1FAIpQLSeUAl2FgGTzG6Zli8vIzeclYiBGmK1rf8gj37rx-QDddeoucQ/viewform"
            />
          </article>
        </div>

        {/* How to participate */}
        <ContentCard
          title="How to participate?"
          idTitle="how-to-participate"
          text={
            <div>
              <ol
                className="list-inside list-decimal mb-8"
                aria-labelledby="event-steps"
              >
                <li className="mb-4">
                  <strong>Plan a special event under this theme</strong> during
                  International Day of Women and Girls in Science (11 February)
                  and International Womens Day{"'"}s (8 March) or any time
                  throughout the year.
                </li>
                <li className="mb-4">
                  <strong>Register</strong> your event in our world calendar.
                </li>
                <li className="mb-4">
                  Promote your event using the hashtag{" "}
                  <span className="text-yellow-400 italic">
                    #WomenAndGirlsInAstronomy.
                  </span>
                  !
                </li>
              </ol>
              <div className="flex gap-8">
                <Button
                  onClick={() =>
                    copyToClipboard(" #WomenAndGirlsInAstronomy #IAUoutreach")
                  }
                  label="Copy Hashtag"
                  color="dark"
                />
                {copySuccess && (
                  <p className="mt-2 text-white">Register your event</p>
                )}
              </div>
            </div>
          }
          type="primary"
          wfull
        />

        {/** Ideas for your events */}
        <div className="flex flex-col gap-16 md:py-16 py-8">
          <div className="flex flex-col gap-8 px-8">
            <h2
              className="capitalize text-h2 font-bold w-full scroll-mt-24"
              id="ideas-for-your-events"
            >
              Ideas for your events
            </h2>
            <p className="xl:text-h5 text-p text-gray-600">
              In celebration of the women of solar astronomy, we have some
              suggestions that you can use:
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            {/* Activity: Sunspots and the Butterfly Plot */}
            <div className="lg:flex-1">
              <ActivityCard
                id="annie-maunder"
                title="Sunspots and the Butterfly Plot"
                scientist={{
                  name: "Annie Maunder",
                  years: "(1868-1947)",
                  description:
                    "Astronomer, astrophotographer, and science communicator.",
                  link: "https://www.rmg.co.uk/stories/topics/annie-maunder-solar-astronomer-astrophotographer",
                }}
                objective="By the end of the activity, learners should be able to identify sunspots on an image of the Sun and understand that the solar surface is not static."
                activities={[
                  {
                    title: "Introduce Annie Maunder and her work.",
                    suggestions: [
                      "Suggestion: After giving a biography of Annie Maunder, give the learners a chance to discover her work on their own.",
                      "Provide images that show the Sun's surface with sunspots visible at different points in time throughout the 11-year solar cycle, and overlay a grid showing the latitude on the solar surface.",
                      "On a piece of graph paper with the x-axis as time and the y-axis as latitude (for more mathematically-inclined groups, instead make the y-axis the sine of the latitude and convert all numbers accordingly), have students plot the latitude of sunspots.",
                      "Encourage learners to connect this to the number of sunspots they see on each image and make a connection to the solar cycle.",
                      "Once the learners have derived their own butterfly plots, talk with them about sunspots and their significance for the solar cycle: what they are, how they change over time (butterfly plot), what we can learn from them and how this is all connected to 2025.",
                    ],
                  },
                  {
                    title: "End with solar observation.",
                    suggestions: [
                      "Count the number of sunspots, or draw the surface of the Sun.",
                      {
                        text: "If you do not have access to a solar telescope or filter, you can see the day's solar surface in multiple wavelengths at this link",
                        link: "Universe Monitor",
                        href: "https://www.universemonitor.com/feeds/sun/",
                      },
                    ],
                  },
                ]}
              />
            </div>
            <div className="lg:flex-1">
              <ActivityCard
                id="maria-mitchell"
                title="The Structure of Sunspots"
                scientist={{
                  name: "Maria Mitchell",
                  years: "(1818 - 1889)",
                  description:
                    "astronomer, librarian, naturalist, and educator.",
                  link: "https://www.sheisanastronomer.org/history/maria-mitchell",
                }}
                objective="By the end of the
                      activity, learners should be able to describe the structure
                      of sunspots."
                activities={[
                  {
                    title:
                      "Discuss why sunspots appear darker on the surface, convection currents and the role of magnetic fields.",
                    suggestions: [
                      "Suggestion: A lava lamp (physical or a video of one) can be used to demonstrate how heat can move  material around.",
                    ],
                  },
                  {
                    title: "Introduce Maria Mitchell and her work.",
                    suggestions: [
                      "Suggestion: Split up her biography into time periods and have the learners put together her history in chronological order. Note the many facets of he research profile, and the observatory that is named after her.",
                    ],
                  },
                  {
                    title: "End with solar observation.",
                    suggestions: [
                      {
                        text: "Suggestion: Count the number of sunspots, or draw the surface of the Sun. If you do not have access to a solar telescope or filter, you can see the day's solar surface in multiple wavelengths at this link",
                        link: "Universe Monitor",
                        href: "https://www.universemonitor.com/feeds/sun/",
                      },
                    ],
                  },
                ]}
              />
            </div>
            <div className="lg:flex-1">
              <ActivityCard
                id="cecilia-payne-gaposchkin"
                title="Many ways to see the Sun"
                scientist={{
                  name: "Cecilia Payne-Gaposchkin",
                  years: "(1900 – 1979)",
                  description: "astronomer and astrophysicist.",
                  link: "https://www2.hao.ucar.edu/education/scientists/cecilia-payne-1900-1979",
                }}
                objective="By the end of the
                      activity, learners should be able to describe how
                      astronomers figure out what objects in space are made of."
                activities={[
                  {
                    title: "Introduce Cecilia Payne-Gaposchkin and her work.",
                    suggestions: [
                      "Suggestion: Focus on her PhD work and how she persevered and believed in her data, despite critics who told her she was wrong. Her PhD thesis is considered one of the most important publications in astrophysics.",
                    ],
                  },
                  {
                    title:
                      "Lead a discussion of the electromagnetic spectrum, spectra, and absorption and emission lines.",
                    suggestions: [
                      "Suggestion: Split up her biography into time periods and have the learners put together her history in chronological order. Note the many facets of he research profile, and the observatory that is named after her.",
                    ],
                  },
                  {
                    title: "End with solar observation.",
                    suggestions: [
                      "Suggestion: If you have access to an H-alpha telescope and a telescope with a normal solar filter, have learners compare the two images and describe the differences.",
                    ],
                  },
                ]}
              />
            </div>
          </div>
          <div className="px-8 space-y-4">
            <h4 className="capitalize xl:text-h5 text-p text-gray-600">
              Do you need more ideas on how to create an event?
            </h4>
            <p className="text-p text-gray-600">You can check our mini guide</p>
            <Button
              label="Download mini guide"
              color="primary"
              onClick={handleDownload}
             />
          </div>
        </div>

        <ContentCard
          title="Share your event with the world"
          idTitle="share-your-event-with-the-world"
          image={{
            imageUrl: `${projectPath}/images/global-programs/women-in-astronomy/share-your-activity.png`,
          }}
          link={{
            url: "https://docs.google.com/forms/d/e/1FAIpQLSeUAl2FgGTzG6Zli8vIzeclYiBGmK1rf8gj37rx-QDddeoucQ/viewform",
            label: "Register your event",
          }}
          text={
            <div className="flex flex-col gap-4">
              <p>
                We encourage you to share your events and participate in Women
                and Girls in Astronomy!
              </p>
              <p>
                By submitting your event, you consent to participate in the OAO
                initiatives. Verified submissions will be added to the Women and
                Girls in Astronomy homepage calendar.
              </p>
              <p>
                If your event is open to the public, please leave enough
                information for people to get involved - both in person and
                online!
              </p>
              <p>
                Moreover, we aim to promote every event on social media. If
                pictures are available, you can share your initiative with over
                15,000 people on social media.
              </p>
              <p>
                The submissions must be written in English. If you cannot
                translate the information for your event, please use an online
                translator like Google Translate or DeepL.
              </p>
              <p>Please note that we may copy-edit some content if needed.</p>
            </div>
          }
          type="primary"
          wfull
        />

        <ContentCard
          title="Calendar of Astronomy events"
          idTitle="calendar-of-astronomy-events"
          link={{
            url: "/astronomy-outreach-map",
            label: "Check our events calendar",
          }}
          text="To highlight all the amazing activities happening around the globe, we will promote a calendar of events displayed on a world map and our social media channels."
          type="transparent"
          wfull
        />

        <ContentCard
          title="More Information"
          idTitle="more-information"
          text={
            <div className="flex flex-col gap-4">
              <p className="text-gray-700 mb-4">
                All events must respect the general guidelines of the IAU Global
                Outreach initiatives, which promote the key role of astronomy
                for the betterment of science and society through collaboration
                and with a spirit of respect, tolerance, and peace.
              </p>
              <span className="text-gray-700 mb-4">
                If you need to change your events already on the calendar,
                please email the IAU Office for Astronomy Outreach Team via{" "}
                <EmailDisplay email={"public@oao.iau.org"} /> with the subject
                line{" "}
                <span className="font-semibold">
                  “W&amp;GiA Calendar 2025 – Update”
                </span>
                .
              </span>
              <span className="text-gray-700">
                If you cannot submit through this form, please email the IAU
                Office for Astronomy Outreach team via{" "}
                <EmailDisplay email={"public@oao.iau.org"} /> with the subject
                line{" "}
                <span className="font-semibold">
                  “W&amp;GiA Calendar 2025 – Submission Form”.
                </span>
              </span>
            </div>
          }
          type="secondary"
          wfull
        />
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
