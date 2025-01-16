/**
 * Represents a single menu item in the navigation menu.
 *
 * @property {string} name - The display name of the menu item.
 * @property {string} path - The URL path the menu item links to.
 * @property {Array<{ name: string; path: string; }>} [options] -
 * Optional submenu items. If present, this menu item contains a dropdown.
 */
export type TMenuItem = {
  name: string;
  path: string;
  options?: {
    name: string;
    path: string;
  }[];
};

/**
 * Represents a list of menu items.
 *
 * A TMenuList is an array of `TMenuItem`, where each element
 * can be either a standalone link or a dropdown menu with nested options.
 */
export type TMenuList = TMenuItem[];
