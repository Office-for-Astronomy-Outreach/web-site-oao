import { TFunction } from 'i18next';
import { TMenuItem } from './types';

export const menuList = (t: TFunction): TMenuItem[] => {
  return [
    {
        name: t('menu.about'),
        path: "/about",
    },
    {
      name: t('menu.outreach'),
      path: "",
      options: [
        {
            name: t('menu.global_programs'),
            path: ""
        },
        {
            name: "Meet the Astronomers",
            path: ""
        },
        {
            name: "Resources",
            path: ""
        },
        {
            name: "Translations",
            path: ""
        }
      ]
    },
    {
      name: t('menu.community'),
      path: "",
      options: [
        {
          name: "NOCs Network",
          path: ""
        },
      ]
    },
    {
      name: "menu.contact",
      path: "",
    },
  ];
};
