import React from "react";
import { TMenuList } from "./types";
import MenuItem from "./MenuItem";

export interface NavbarProps {
  menuList: TMenuList; // Array of menu items to display
}

/**
 * Navbar Component
 * 
 * Renders the main navigation bar for desktop screens, displaying 
 * a list of menu items with optional dropdowns for submenus.
 * 
 * @param menuList - Array of menu items, each with a name, path, 
 * and optionally a list of submenus (options).
 */
const Navbar: React.FC<NavbarProps> = ({ menuList }) => {
  return (
    <nav
      className="hidden sm:flex space-x-4"
      role="menubar"
      aria-label="Main Navigation"
    >
      {menuList?.map((item) => (
        <MenuItem
          key={item.name}
          name={item.name}
          path={item.path}
          options={item.options}
        />
      ))}
    </nav>
  );
};

export default Navbar;
