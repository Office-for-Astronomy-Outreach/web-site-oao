import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import { menuList } from './menuList';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';

/**
 * Header component: Displays the main navigation bar with desktop and mobile views.
 * 
 * It includes:
 * - A logo link
 * - A mobile menu toggle button
 * - A desktop navigation bar (with language selector)
 * - A mobile navigation menu (appears on mobile devices)
 */
const Header: React.FC = () => {
  // State to toggle the mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for the mobile menu
  const toggleMobileMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  // i18n translation function for multi-language support
  const { t } = useTranslation('layout');

  // Generate the menu list based on translations
  const menu = menuList(t);

  return (
    <>
      {/* Main Header */}
      <header className="shadow-lg z-[1] bg-white rounded-lg">
        <div className="container mx-auto" >
          <div className="flex justify-between items-center uppercase sm:mx-0 mx-3">
            {/* Logo */}
            <div className="text-lg font-bold">
                <Image src="/images/logo.png" alt="Office for Astronomy Outreach" width={70} height={70}/>
            </div>

            {/* Hamburger Menu (Visible only on mobile) */}
            <button
              className="md:hidden block"
              onClick={toggleMobileMenu}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              ☰
            </button>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex space-x-4 relative" role="navigation">
              <Navbar menuList={menu} />
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      {isOpen && (
        <MobileNavbar
          menuList={menu}
          onClose={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
