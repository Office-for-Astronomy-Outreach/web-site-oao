import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";
import Banner from "@/components/Banner";
import { useState } from "react";
import ContentCard from "@/components/ContentCard";

export default function WomenAndGirlsInAstronomy() {
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

  return (
    <div role="region" aria-labelledby="outreach-title">
      {/* Hero Section */}
      <Banner
        image={`${path}/images/global-programs/100 hours.png`}
        title="Women and Girls in Astronomy"
        breadcrumbs={breadcrumbs}
      />

      <div className="container mx-auto px-4 py-8 flex flex-col gap-16">
        <ContentCard
          title="About the Event"
          text={
            "Every year, Women and Girls in Astronomy brings together people from around the world to celebrate and highlight the contributions of women and girls to astronomy. This global event, organised by the IAU Office for Astronomy Outreach, aims to inspire new generations, promote gender equity in science, and foster a more inclusive astronomical community. Through workshops, talks, and participatory activities, we connect stories, discoveries, and dreams that remind us the Universe is open to everyone."
          }
          type="secondary"
          twoColums
          wfull
        />
        <div className="flex flex-col gap-16">
          <div className="flex md:w-1/3 gap-8 w-full">
            <div className="sticky top-6 w-full">
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

          <section id="focus-2025" aria-labelledby="focus-heading">
            <h2 className="text-h2 font-bold scroll-mt-24" id="focus-heading">
              A world of science and astronomy for all
            </h2>
            <p>
              In 2025, the Sun will experience a maximum in its activity,
              providing the citizens of Earth with a magnificent show of solar
              events. To celebrate this Solar System-wide event, this year{"'"}s
              Women and Girls in Astronomy events will focus on the women of
              solar physics.
            </p>
            <p>
              Though we will host special events and activities on the{" "}
              <em>International Day of Women and Girls in Science</em> (11
              February) and <em>International Women{"'"}s Day</em> (8 March), we
              celebrate this theme throughout the year and encourage the public
              to join us!
            </p>
          </section>

          <section id="activities" aria-labelledby="activities-heading">
            <h2
              className="text-h2 font-bold scroll-mt-24"
              id="activities-heading"
            >
              This year{"'"}s events and activity ideas
            </h2>
            <p>
              In celebration of the women of solar astronomy, we suggest the
              following activities:
            </p>

            <article
              className="flex flex-col gap-8"
              id="annie-maunder"
              aria-labelledby="annie-maunder-heading"
            >
              <h3 className="text-primary-main text-h3">
                <a href="https://www.rmg.co.uk/stories/topics/annie-maunder-solar-astronomer-astrophotographer">
                  Annie Maunder
                </a>
              </h3>
              <h4 className="text-h4 font-semibold">
                Sunspots and the Butterfly Plot
              </h4>
              <p>
                <strong>Science Objective:</strong> By the end of the activity,
                learners should be able to identify sunspots on an image of the
                Sun and understand that the solar surface is not static.
              </p>
              <ol className="list-decimal ml-8">
                <li className="mb-4">
                  <p>Introduce Annie Maunder and her work.</p>
                  <ul className="list-disc ml-4">
                    <li className="my-2">
                      Suggestion: After giving a biography of Annie Maunder,
                      give the learners a chance to discover her work on their
                      own. Provide images that show the Sun’s surface with
                      sunspots visible at different points in time throughout
                      the 11-year solar cycle, and overlay a grid showing the
                      latitude on the solar surface. On a piece of graph paper
                      with the x-axis as time and the y-axis as latitude (for
                      more mathematically-inclined groups, instead make the
                      y-axis the sine of the latitude and convert all numbers
                      accordingly), have students plot the latitude of sunspots.
                      Encourage learners to connect this to the number of
                      sunspots they see on each image and make a connection to
                      the solar cycle.
                    </li>
                    <li className="my-2">
                      Once the learners have derived their own butterfly plots,
                      talk with them about sunspots and their significance for
                      the solar cycle: what they are, how they change over time
                      (butterfly plot), what we can learn from them and how this
                      is all connected to 2025.
                    </li>
                  </ul>
                </li>
                <li className="mb-4">
                  <p>End with solar observation.</p>
                  <ul className="list-disc ml-4">
                    <li className="my-2">
                      <span className="italic">Suggestion:</span> Count the
                      number of sunspots, or draw the surface of the Sun. If you
                      do not have access to a solar telescope or filter, you can
                      see the day’s solar surface in multiple wavelengths at
                      this
                      <a href="https://www.universemonitor.com/feeds/sun/">
                        link.
                      </a>
                    </li>
                  </ul>
                </li>
              </ol>
            </article>

            <article
              className="flex flex-col gap-8"
              id="maria-mitchell"
              aria-labelledby="maria-mitchell-heading"
            >
              <h3 className="text-primary-main text-h3">
                <a href="https://www.sheisanastronomer.org/history/maria-mitchell">
                  Maria Mitchell
                </a>
              </h3>
              <h4 className="text-h4 font-semibold">
                The Structure of Sunspots
              </h4>
              <p>
                <strong>Science Objective:</strong> By the end of the activity,
                learners should be able to describe the structure of sunspots.
              </p>
              <ol className="list-decimal ml-8">
                <li className="mb-4">
                  <p>
                    Discuss why sunspots appear darker on the surface,
                    convection currents and the role of magnetic fields.
                  </p>
                  <ul className="list-disc ml-4">
                    <li className="my-2">
                      Suggestion: A lava lamp (physical or a video of one) can
                      be used to demonstrate how heat can move material around.
                    </li>
                  </ul>
                </li>
                <li className="mb-4">
                  <p>Introduce Maria Mitchell and her work.</p>
                  <ul className="list-disc ml-4">
                    <li className="my-2">
                      Suggestion: Split up her biography into time periods and
                      have the learners put together her history in
                      chronological order. Note the many facets of her research
                      profile, and the observatory that is named after her.
                    </li>
                  </ul>
                </li>
              </ol>
            </article>

            <article
              className="flex flex-col gap-8"
              id="cecilia-payne"
              aria-labelledby="cecilia-heading"
            >
              <h3 className="text-primary-main text-h3" id="cecilia-heading">
                Cecilia Payne-Gaposchkin
              </h3>
              <h4 className="text-h4 font-semibold">
                Many ways to see the Sun
              </h4>
              <p>
                <strong>Science Objective:</strong> By the end of the activity,
                learners should be able to describe how astronomers figure out
                what objects in space are made of.
              </p>
              <ol className="list-decimal ml-8">
                <li className="mb-4">
                  <p>Introduce Cecilia Payne-Gaposchkin and her work.</p>
                  <ul className="list-disc ml-4">
                    <li className="my-2">
                      Suggestion: Focus on her PhD work and how she persevered
                      and believed in her data, despite critics who told her she
                      was wrong. Her PhD thesis is considered one of the most
                      important publications in astrophysics.
                    </li>
                  </ul>
                </li>
                <li className="mb-4">
                  <p>
                    Lead a discussion of the electromagnetic spectrum, spectra,
                    and absorption and emission lines.
                  </p>
                  <ul className="list-disc ml-4">
                    <li className="my-2">
                      Suggestion: print out a set of emission lines and
                      corresponding absorption spectra. Encourage learners to
                      match the elements’ spectral fingerprints. For an added
                      challenge, print out spectra that show multiple elements
                      present.
                    </li>
                  </ul>
                </li>
                <li className="mb-4">
                  <p>End with solar observation. </p>
                  <ul className="list-disc ml-4">
                    <li className="my-2">
                      Suggestion: If you have access to an H-alpha telescope and
                      a telescope with a normal solar filter, have learners
                      compare the two images and describe the differences.
                    </li>
                  </ul>
                </li>
              </ol>
            </article>

            <p>More coming soon!</p>
          </section>

          <section id="get-involved" aria-labelledby="involved-heading">
            <h2
              className="text-h2 font-bold scroll-mt-24"
              id="involved-heading"
            >
              Getting involved is easy!
            </h2>
            <p>Be safe, be inclusive, and share your event with the world!</p>
            <h3 id="global-event-title" className="text-h3 text-primary-main">
              How can you be part of a global event?
            </h3>

            <ol
              className="list-inside list-decimal"
              aria-labelledby="event-steps"
            >
              <li className="mb-4">
                Plan a special event under this theme during International Day
                of Women and Girls in Science (11 February) and International
                Women’s Day (8 March) or any time throughout the year.
              </li>
              <li className="mb-4">
                Promote your event using the hashtag
                <span className="text-primary-main italic">
                  #WomenAndGirlsInAstronomy
                </span>
                !
              </li>
            </ol>

            <p>
              To highlight all the amazing activities happening around the
              globe, we will promote a calendar of events displayed on a world
              map.{" "}
            </p>

            <p>
              We encourage you to share your events and participate in Women and
              Girls in Astronomy! If your event is open to the public, please
              leave enough information for people to get involved – both in
              person and online!
            </p>

            <p>
              By submitting your event, you consent to participate in the OAO
              initiatives. Verified submissions will be added to the Women and
              Girls in Astronomy homepage calendar. If your event is open to the
              public, leave enough information for people to get involved – both
              in person and online!
            </p>

            <p>
              Moreover, we aim to promote every event on social media. If
              pictures are available, you can share your initiative with over
              15,000 people on social media.{" "}
            </p>

            <p>
              The submissions must be written in English. If you cannot
              translate the information for your event, please use an online
              translator like Google Translate or DeepL.
            </p>

            <p>Please note that we may copy-edit some content if needed.</p>
          </section>

          <section id="calendar" aria-labelledby="calendar-heading">
            <h2
              className="text-h2 font-bold scroll-mt-24"
              id="calendar-heading"
            >
              Calendar of Astronomy events
            </h2>
            <p>
              To highlight all the amazing activities happening around the
              globe, we will promote a calendar of events displayed on a world
              map and our social media channels. We encourage you to share your
              events and participate in Women and Girls in Astronomy! If your
              event is open to the public, please leave enough information for
              people to get involved—both in person and online! Be safe, be
              inclusive, and share your event with the world! Add your event at
              this link.
            </p>
          </section>

          <section id="contact" aria-labelledby="contact-heading">
            <h2 className="text-h2 font-bold scroll-mt-24" id="contact-heading">
              More information
            </h2>
            <p>
              All events must respect the general guidelines of the IAU Global
              Outreach initiatives, which promote the key role of astronomy for
              the betterment of science and society through collaboration and
              with a spirit of respect, tolerance, and peace. If you need to
              change your events already on the calendar, please email the IAU
              Office for Astronomy Outreach Team via public@oao.iau.org with the
              subject line “W&GiA Calendar 2025 - Update”. If you cannot submit
              through this form, please email the IAU Office for Astronomy
              Outreach team via public@oao.iau.org with the subject line “ W&GiA
              Calendar 2025 - Submission Form”.
            </p>{" "}
          </section>
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
