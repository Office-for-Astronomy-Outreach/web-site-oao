import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import Banner from "@/components/Banner";
import { projectPath } from "@/utils/path";
import classNames from "classnames";
import EmailDisplay from "@/components/EmailDisplay";

export default function CalendarEvent() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Outreach", href: "/outreach" },
  ];

  const containerClass = classNames(
    "md:container",
    "md:mx-auto mx-2",
    "my-16",
    "md:px-4",
    "py-2",
    "flex flex-col gap-24"
  );

  const year = new Date().getFullYear();

  return (
    <div>
      <Banner
        image={{
          urlImage: `${projectPath}/images/global-programs/bg-women-and-girls.jpg`,
        }}
        title="Global Outreach Events"
        breadcrumbs={breadcrumbs}
      />
      <div className={containerClass}>
        <div className="flex flex-col gap-4">
          <p>
            The IAU Global Outreach Events are international outreach activities
            supported by the IAU outreach office, with the intent of promoting
            and disseminating best practices internationally. These events are
            developed and implemented by independent organisers internationally
            and we encourage outreach professionals, educators, amateur and
            professional astronomers, to share their stories and join our
            inspiring outreach community.
          </p>
          <p>
            Anyone can submit an event related to astronomy that aligns with the
            IAU Global Outreach initiatives: promoting astronomy for the
            betterment of science and society, through collaboration and with a
            spirit of respect, tolerance and peace.
          </p>
          <p>
            You can register your events in the official IAU Calendar of
            Outreach Global Events for {year}
          </p>
          <span>
            Note: If you experience any issues accessing our Online Form, please
            send an email to our IAU Office for Astronomy Outreach Team via{" "}
            <EmailDisplay email={"public@oao.iau.org"} /> with the subject line
            “IAU Outreach Event Calendar {year} - Request Form”.
          </span>

          <p>
            Note: Once your activity is visible on our event calendar you are
            free to use the IAU Office for Astronomy Outreach Logo in your
            registered events.
          </p>
        </div>
        <div className="w-full h-screen flex justify-center items-center">
          <iframe
            src="https://view-awesome-table.com/-Mb8eBRBsk-GNOX7rRJE/view/"
            className="w-full h-full border-0"
            allowFullScreen
            title={`Global Outreach Events | ${year} Event Calendar`}
          />
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
