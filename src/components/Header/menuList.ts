import { TFunction } from "i18next";
import { TMenuItem } from "./types";

export const menuList = (t: TFunction): TMenuItem[] => {
  return [
    {
      name: t("menu.about"),
      path: "/about-us",
    },
    {
      name: t("menu.outreach"),
      path: "/public-engagement",
    },
    {
      name: t("menu.professional-development"),
      path: "/professional-development",
    },
    {
      name: t("menu.community"),
      path: "nocs-network",
      options: [
        {
          name: "NOCs Network",
          path: "/nocs-network",
        },
        {
          name: "World Regions",
          optionGrup: [
            {
              name: "Africa",
              path: "/nocs-network/africa",
            },
            {
              name: "Americas",
              path: "/nocs-network/americas",
            },
            {
              name: "Asia",
              path: "/nocs-network/asia",
            },
            {
              name: "Europe",
              path: "/nocs-network/europe",
            },
            {
              name: "Oceania",
              path: "/nocs-network/oceania",
            },
          ],
        },
        {
          name: "Astronomy Engagement Events",
          path: "/astronomy-outreach",
        },
        {
          name: "Astronomy Engagement Events",
          optionGrup: [
            {
              name: "Register your event",
              path: "/astronomy-outreach/events/register",
            },
          ],
        },
      ],
    },
    {
      name: t("menu.contact"),
      path: "/contact",
    },
  ];
};
