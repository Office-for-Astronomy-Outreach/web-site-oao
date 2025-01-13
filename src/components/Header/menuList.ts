import { TFunction } from 'i18next';
import { TMenuItem } from './types';

export const menuList = (t: TFunction): TMenuItem[] => {
  return [
    {
        name: t('menu.about'),
        path: "/about-us",
    },
    {
      name: t('menu.outreach'),
      path: "/outreach",
    },
    {
      name: t('menu.professional-development'),
      path: "/professional-development",
    },
    {
      name: t('menu.community'),
      path: "",
      options: [
        {
          name: "NOCs Network",
          path: "/nocs-network"
        },
      ]
    },
    {
      name: t('menu.contact'),
      path: "/contact",
    },
  ];
};
