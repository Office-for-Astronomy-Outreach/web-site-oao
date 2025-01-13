import Link from 'next/link';
import { TMenuItem } from './types';

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
  // Case: Item with submenu (Dropdown)
  if (options && options.length > 0) {
    return (
      <div 
        className="flex flex-col justify-center group relative" 
        role="menuitem"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div className="relative">
          <span 
            className="cursor-pointer capitalize"
            aria-expanded="false"
          >
            {name}
          </span>

          {/* Dropdown menu */}
          <div className="absolute right-0 w-[200px] hidden group-hover:block bg-white shadow-lg p-4 space-y-2 border rounded"
            role="menu"
            aria-labelledby={name} 
          >
            {options.map((option) => (
              <Link 
                href={option.path} 
                key={option.name} 
                className="menu-link capitalize text-body"
                role="menuitem"
                aria-label={option.name}
              >
                {option.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Case: Simple Link (No submenu)
  return (
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
