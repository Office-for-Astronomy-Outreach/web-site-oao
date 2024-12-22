import React from "react";
import MobileMenuItem from "./MobileMenuItem";
import { TMenuList } from "./types";

interface MobileNavbarProps {
  menuList: TMenuList; // Array of menu items to display
  onClose: () => void; // Function to close the mobile navigation
}

/**
 * MobileNavbar Component
 * 
 * Displays a full-screen navigation menu for mobile devices. This component 
 * uses a `nav` element to define the navigation region and lists the menu items.
 * 
 * @param menuList - Array of menu items, each with a name, path, and optionally 
 * a list of submenus (options).
 * @param onClose - A function to close the mobile navigation menu when triggered.
 */
const MobileNavbar: React.FC<MobileNavbarProps> = ({ menuList, onClose }) => {
  return (
    <nav
      className="sm:hidden bg-gray-700 text-white w-full absolute top-0 left-0 h-screen z-10"
      role="navigation"
      aria-label="Mobile Navigation"
    >
      <div className="container mx-auto p-4 flex flex-col space-y-4">
        {/* Close Button */}
        <button
          className="self-end text-2xl hover:text-gray-300"
          onClick={onClose}
          aria-label="Close mobile menu"
          role="button"
        >
          ✕
        </button>

        {/* Render Menu Items */}
        <ul role="menu" className="space-y-2">
          {menuList.map((item) => (
            <li key={item.name} role="none">
              <MobileMenuItem 
                menuItem={item} 
                onClose={onClose} 
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
