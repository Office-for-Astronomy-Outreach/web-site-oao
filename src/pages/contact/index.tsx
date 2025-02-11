import type { GetServerSideProps } from "next";
import { ni18nConfig } from "ni18n.config";
import { loadTranslations } from "ni18n";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import Banner from "@/components/Banner";
import { projectPath } from "@/utils/path";
import classNames from "classnames";
import EmailDisplay from "@/components/EmailDisplay";

export default function Contact() {
  const containerClass = classNames(
    "md:container",
    "md:mx-auto mx-2",
    "my-16",
    "md:px-4",
    "py-2",
    "flex flex-col gap-24"
  );

  return (
    <div>
      <Banner
        image={{ urlImage: `${projectPath}/images/contact/background.png` }}
        title="Contact Us"
        breadcrumbs={[]}
      />
      <div className={containerClass}>
        {/* Location Section */}

        <section
          aria-labelledby="location-heading"
          className="mb-10 bg-white md:py-16 p-8 rounded-lg shadow-sm flex gap-8 md:flex-row flex-col"
          role="contentinfo"
        >
          <div className="flex flex-col gap-16">
            <div>
              <h2
                id="location-heading"
                className="text-2xl font-semibold text-primary-main flex items-center mb-4"
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-2 text-primary-main "
                />
                Our Location
              </h2>
              <address className="not-italic">
                <p className="text-lg text-gray-600">
                  310 South Building, National Astronomical Observatory of Japan
                </p>
                <p className="text-lg  text-gray-600">
                  2-21-1 Osawa, Mitaka, Tokyo, 181-8588, Japan
                </p>
              </address>
            </div>
            <div>
              <h2
                id="contact-heading"
                className="text-2xl font-semibold text-primary-main flex items-center mb-6"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-primary-main "
                />
                Contact Information
              </h2>

              <ul className="space-y-6">
                {/* General Enquiries */}
                <li>
                  <h3 className="text-lg text-gray-600">
                    General Enquiries, Submissions, Sponsorships, and
                    Partnerships
                  </h3>

                  <EmailDisplay email={"public@oao.iau.org"} />
                </li>

                {/* National Outreach Coordinators */}
                <li>
                  <h3 className="text-lg text-gray-600">
                    National Outreach Coordinators
                  </h3>

                  <EmailDisplay email={"iauoutreach@oao.iau.org"} />
                </li>

                {/* CAP Journal */}
                <li>
                  <h3 className="text-lg text-gray-600">CAP Journal</h3>
                  <EmailDisplay email={"capjournal@oao.iau.org"} />
                </li>
              </ul>
            </div>
          </div>

          <iframe
            title={"Location's Map"}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8988.832896791404!2d139.5246092254684!3d35.67514945662409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018effac9796751%3A0xf3f7992baa46c481!2sObservatorio%20Astron%C3%B3mico%20Nacional%20de%20Jap%C3%B3n!5e0!3m2!1ses!2smx!4v1739164726036!5m2!1ses!2smx"
            height="500"
            style={{ border: 0, width: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
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
