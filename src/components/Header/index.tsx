import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import { menuList } from './menuList';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';

/**
 * Header component: Displays the main navigation bar with desktop and mobile views.
 */
const Header: React.FC = () => {
  const path = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { t } = useTranslation('layout');

  const menu = menuList(t);

  const toggleMobileMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${
          scrolled ? 'bg-white text-black shadow-lg' : 'bg-transparent text-white'
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center uppercase sm:mx-0 mx-3 py-2 px-4">
            {/* Logo */}
            <div className="text-lg font-bold">
              <Image src={`${path}/images/logo.png`} alt="Office for Astronomy Outreach" width={65} height={65} />
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
            <nav className="hidden md:flex space-x-6 relative px-2" role="navigation">
              <Navbar menuList={menu} />
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      {isOpen && <MobileNavbar menuList={menu} onClose={toggleMobileMenu} />}
    </>
  );
};

export default Header;
