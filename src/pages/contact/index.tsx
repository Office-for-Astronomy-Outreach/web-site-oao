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

export default function Contact() {
  return (
    <div>
      <Banner
        image={{ urlImage: `/images/professional-development.png` }}
        title="Contact Ust"
        breadcrumbs={[]}
      />

      {/* Location Section */}
      <section
        aria-labelledby="location-heading"
        className="mb-10"
        role="contentinfo"
      >
        <h2
          id="location-heading"
          className="text-2xl font-semibold text-blue-800 flex items-center mb-4"
        >
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="mr-2 text-blue-600"
          />
          Our Location
        </h2>
        <address className="not-italic">
          <p className="text-lg">
            310 South Building, National Astronomical Observatory of Japan
          </p>
          <p className="text-lg">
            2-21-1 Osawa, Mitaka, Tokyo, 181-8588, Japan
          </p>
        </address>
      </section>

      {/* Contact Section */}
      <section aria-labelledby="contact-heading" role="region">
        <h2
          id="contact-heading"
          className="text-2xl font-semibold text-blue-800 flex items-center mb-6"
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-600" />
          Contact Information
        </h2>

        <ul className="space-y-6">
          {/* General Enquiries */}
          <li>
            <h3 className="text-lg font-medium">
              General Enquiries, Submissions, Sponsorships, and Partnerships
            </h3>
            <a
              href="mailto:public@oao.iau.org"
              className="text-blue-600 hover:underline"
              aria-label="Send an email to public@oao.iau.org"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              public@oao.iau.org
            </a>
          </li>

          {/* National Outreach Coordinators */}
          <li>
            <h3 className="text-lg font-medium">
              National Outreach Coordinators
            </h3>
            <a
              href="mailto:iauoutreach@oao.iau.org"
              className="text-blue-600 hover:underline"
              aria-label="Send an email to iauoutreach@oao.iau.org"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              iauoutreach@oao.iau.org
            </a>
          </li>

          {/* CAP Journal */}
          <li>
            <h3 className="text-lg font-medium">CAP Journal</h3>
            <a
              href="mailto:capjournal@oao.iau.org"
              className="text-blue-600 hover:underline"
              aria-label="Send an email to capjournal@oao.iau.org"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              capjournal@oao.iau.org
            </a>
          </li>
        </ul>
      </section>
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
