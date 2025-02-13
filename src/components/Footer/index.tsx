import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";
import { projectPath } from "@/utils/path";

const Footer: React.FC = () => {
  const { t } = useTranslation("layout");

  const socialLinks = [
    {
      href: "https://www.facebook.com/IAUoutreach",
      icon: faFacebookSquare,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/oao_iau/",
      icon: faInstagramSquare,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/iau-oao/",
      icon: faLinkedin,
      label: "LinkedIn",
    },
  ];

  const menuLinks = [
    {
      title: t("footer.menuLinks.quick-links"),
      links: [
        { href: "/", label: t("footer.menuLinks.home") },
        { href: "/about", label: t("footer.menuLinks.about") },
        { href: "/nocs-network", label: t("footer.menuLinks.nocs-network") },
        {
          href: "/outreach/global-projects/astronomy-outreach-map",
          label: "Astronomy Outreach Map",
        },
      ],
    },
    {
      title: t("footer.menuLinks.global-projects"),
      links: [
        {
          href: "/outreach/global-projects/100-hours-of-astronomy",
          label: "100 Hours of Astronomy",
        },
        {
          href: "/outreach/global-projects/women-and-girls-in-astronomy",
          label: t("footer.menuLinks.women-and-girls-in-astronomy"),
        },
        {
          href: "/outreach/global-projects/dark-skies",
          label: t("footer.menuLinks.dark-skies"),
        },
      ],
    },
    {
      title: t("footer.menuLinks.resources"),
      links: [
        { href: "/infographics", label: t("footer.menuLinks.infographics") },
        { href: "/workshops", label: t("footer.menuLinks.workshops") },
        {
          href: "/astronomy-today",
          label: t("footer.menuLinks.astronomy-today"),
        },
        {
          href: "/astronomy-education-materials",
          label: t("footer.menuLinks.astronomy-education-materials"),
        },
      ],
    },
  ];

  return (
    <footer
      className="bg-gradient text-white rounded-lg shadow-md"
      role="contentinfo"
    >
      <div className="container mx-auto px-8 py-12 flex flex-col gap-16">
        <div className="flex md:flex-row flex-col flex-wrap justify-between items-center gap-16">
          <div className="flex items-center gap-16 mb-4 sm:mb-0">
            <Image
              src={`${projectPath}/images/logos/oao-logo-white.png`}
              alt="Office for Astronomy Outreach Logo"
              width={150}
              height={150}
              style={{ width: 150, height: 150 }}
              priority
            />
            <Link
              href="https://www.nao.ac.jp/en/"
              target="_blank"
              className="relative rounded-lg aspect-video hover:scale-105 transition-transform"
              aria-label="Visit the National Astronomical Observatory of Japan website"
            >
              <Image
                src={`${projectPath}/images/partners/naoj-logo-white.png`}
                alt="National Astronomical Observatory of Japans Logo"
                width={150}
                height={85}
                style={{ width: 150, height: 85 }}
                priority
              />
            </Link>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4">
              {t("footer.astronomy-for-everyone.title")}
            </h3>
            <p className="text-xs md:text-base">
              {t("footer.astronomy-for-everyone.description")}
            </p>
          </div>
        </div>

        <div className="flex gap-8 w-full" aria-label="Social Media Links">
          <h3 className="font-semibold text-xl">{t("footer.follow-us")}:</h3>
          {socialLinks.map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-yellow-400 flex gap-4 items-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${label}`}
            >
              <FontAwesomeIcon icon={icon} size="xl" />
            </Link>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-16">
          <div className="w-full">
            <h3 className="font-semibold text-xl mb-4">
              {t("footer.menuLinks.contact-information")}
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-4">
                <FontAwesomeIcon icon={faLocationDot} className="mt-[0.3rem]" />
                National Astronomical Observatory of Japan, 2 Chome-21-1 Osawa,
                Mitaka, Tokyo 181-8588, Japan
              </li>
              <li className="flex gap-4 items-center">
                <FontAwesomeIcon icon={faEnvelope} /> public@oao.iau.org
              </li>
            </ul>
          </div>

          {menuLinks.map(({ title, links }) => (
            <div key={title} className="w-full">
              <h3 className="font-semibold text-xl mb-4">{title}</h3>
              <ul className="flex flex-col gap-2">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="hover:text-yellow-400 flex gap-4 items-center"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center px-8 py-4">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} {t("footer.copy-right")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
