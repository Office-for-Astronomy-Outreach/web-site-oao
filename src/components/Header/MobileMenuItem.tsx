import Link from "next/link";
import React, { useState } from "react";
import { TMenuItem } from "./types";

/**
 * Props for the MobileMenuItem component
 */
export interface MobileMenuItemProps {
  menuItem: TMenuItem; // Menu item
  onClose: () => void; // Function to close the main menu
}

/**
 * MobileMenuItem Component
 *
 * Represents a mobile menu item. If the item has submenus, it will render
 * a toggleable dropdown. Each submenu item is displayed as a `Link` element.
 * This component is designed for use in a mobile navigation context.
 *
 * @param menuItem - The menu item object, containing a name, path, and optional submenu options.
 * @param onClose - A function to close the main navigation menu when triggered.
 */
const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  menuItem,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Case: Item with a submenu
  if (menuItem?.options && menuItem?.options.length > 0) {
    return (
      <div>
        <button
          className="flex justify-between w-full hover:underline"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`submenu-${menuItem.name}`}
          role="menuitem"
        >
          {menuItem.name}
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div
            id={`submenu-${menuItem.name}`}
            className="pl-4 space-y-2"
            role="menu"
            aria-labelledby={`submenu-${menuItem.name}`}
          >
            {menuItem.options.map((option) => (
              <Link
                href={option.path}
                key={option.name}
                className="hover:underline block"
                onClick={onClose}
                role="menuitem"
                aria-label={option.name}
              >
                {option.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Case: Item without a submenu
  return (
    <Link
      href={menuItem.path!}
      className="hover:underline block"
      onClick={onClose}
      role="menuitem"
      aria-label={menuItem.name}
    >
      {menuItem.name}
    </Link>
  );
};

export default MobileMenuItem;
