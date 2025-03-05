import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";
import type { GetServerSideProps } from "next";
import classNames from "classnames";

import Banner from "@/components/Banner";
import ContentCard from "@/components/ContentCard";
import EmailDisplay from "@/components/EmailDisplay";

export default function m() {
  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Public Engagement", href: "/public-engagement" },
    { label: "Meet the IAU astronomers", href: "" },
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
          urlImage: `${path}/images/global-programs/meet-the-iau-astronomers/background.jpg`,
          alt: "",
          caption:
            "On 2 July 2019 a total solar eclipse passed over ESO’s La Silla Observatory in Chile. Credit: ESO/P. Horálek",
        }}
        title="Meet the IAU astronomers"
        breadcrumbs={breadcrumbs}
      />

      <div className={containerClass}>
        <ContentCard
          title="Meet the IAU Astronomers! Programme"
          text={
            <div className="flex flex-col gap-8">
              <p>
                The Meet the IAU Astronomers! programme connects amateur
                astronomers and informal and formal educators with IAU member
                astronomers for virtual or in-person events. Through these
                meetings, the IAU members speak with children, adults,
                undergraduate students and other members of the public on
                astronomical research topics, the importance of astronomy for
                society, and choosing astronomy as a career. The programme also
                facilitates undergraduate-level lectures. The intent is to
                present opportunities for colleges and universities to introduce
                astronomy to their students, particularly at institutions
                without astronomy programmes.
              </p>
              <p>
                The Meet the IAU Astronomers! programme aims to enable any
                community to meet professional astronomers and share the wonders
                of the universe regardless of where they are in the world.
              </p>
            </div>
          }
          type={"secondary"}
          wfull
        />

        <ContentCard
          title="How to request an event"
          text={
            <div className="flex flex-col gap-8">
              <p>
                Amateur astronomers, practitioners and educators: if you are
                interested in hosting an IAU-member astronomer for a talk,
                please fill out the Google form. We will follow up with you
                after you submit the form.
              </p>
              <p>
                <strong>Note:</strong> Please make sure to submit your form at
                least three weeks before your preferred event date. If you have
                any issues accessing the form or prefer an alternative way of
                submitting your information to us, please get in touch with us
                at <EmailDisplay email="meet.astronomers@oao.iau.org" />.
              </p>
            </div>
          }
          link={{
            url: "https://docs.google.com/forms/d/e/1FAIpQLScFo9nIaSek34uwVHWylholjuymBLIUOIvOIxfDbEpVwo6W0w/viewform",
            label: "Register",
          }}
          type="transparent"
          wfull
        />

        <ContentCard
          title="How to join the Meet the IAU Astronomers! community of Astronomers"
          text={
            <div className="flex flex-col gap-8">
              <p>
                IAU member astronomers, if you are interested in participating
                in the Meet the IAU Astronomers! programme, please fill out the
                Google form. We will send you a welcome email with more
                information and curate the perfect event for you.
              </p>
              <p>
                <strong>Note:</strong> Please notice that the programme is only
                open for IAU members. If you have any issues accessing the form,
                or prefer an alternative way of submitting your information to
                us, please get in touch with us at{" "}
                <EmailDisplay
                  email="meet.astronomers@oao.iau.org"
                  color="text-yellow-400"
                />
                .
              </p>
            </div>
          }
          link={{
            url: "https://docs.google.com/forms/d/e/1FAIpQLSdfDRmrXhvslGvyovPPGPotz69B-wmbaMxdZ5X3MhxChBC5QQ/viewform",
            label: "Register",
          }}
          type="primary"
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
