/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import Link from "next/link";
import { TMenuItem } from "./types";
import { useEffect, useRef, useState } from "react";

const DropdownMenu: React.FC<{
  options: TMenuItem["options"];
  name: string;
  closeDropdown: () => void;
}> = ({ options, name, closeDropdown }) => {
  return (
    <div
      className="absolute -right-1/4 top-[30px] min-w-[200px] bg-white shadow-lg border rounded text-sm"
      role="menu"
      aria-labelledby={name}
    >
      {options?.map((option, index) => (
        <div key={index} className="w-full">
          {option?.optionGrup && option.optionGrup.length > 0 ? (
            <div className="w-full">
              <p className="text-dark-main px-4 py-2">{option.name}</p>
              <ul>
                {option.optionGrup.map((opG, idx) => (
                  <li key={idx} className="w-full" onClick={closeDropdown}>
                    <Link
                      href={opG.path}
                      className="block w-full pl-8 pr-4 py-2 hover:bg-gray-200 text-gray-600"
                    >
                      {opG.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Link
              href={option.path!}
              onClick={closeDropdown}
              className="block w-full px-4 py-2 text-dark-main hover:bg-gray-200"
            >
              {option.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

/**
 * MenuItem Component
 *
 * Renders a single menu item. If the item has sub-options, it renders a dropdown menu.
 *
 * @param name - The name of the menu item.
 * @param path - The path for the link.
 * @param options - The sub-options (if any) for the menu item, each with its own name and path.
 */
const MenuItem: React.FC<TMenuItem> = ({ name, path, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubMenu = options && options.length > 0;
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return hasSubMenu ? (
    <div
      className="relative group flex flex-col justify-center"
      role="menuitem"
      aria-haspopup="true"
      aria-expanded={isOpen}
      ref={menuRef}
    >
      <button
        onClick={toggleMenu}
        className="cursor-pointer capitalize focus:outline-none"
      >
        {name}
      </button>
      {isOpen && (
        <DropdownMenu
          options={options}
          name={name}
          closeDropdown={() => setIsOpen(false)}
        />
      )}
    </div>
  ) : (
    <Link
      href={path!}
      className="menu-link capitalize"
      role="menuitem"
      aria-label={name}
    >
      {name}
    </Link>
  );
};

export default MenuItem;
