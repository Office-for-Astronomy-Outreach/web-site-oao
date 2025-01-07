import { useRouter } from 'next/router';
import React from 'react';

/**
 * LanguageSelector Component
 * 
 * A dropdown component that allows users to switch between available languages 
 * while maintaining the current route. Optimized for accessibility and usability.
 */
const LanguageSelector: React.FC = () => {
  const router = useRouter();
  const { locale, locales } = router; // Retrieve the current locale and available locales

  /**
   * Handles the language change by updating the locale and preserving the current route.
   * @param event - The change event triggered by selecting a new language
   */
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value;
    router.push(router.asPath, router.asPath, { locale: selectedLocale }); // Update the locale while keeping the current route
  };

  // Return early if no locales are available
  if (!locales || locales.length === 0) return null;

  return (
    <div>
      {/* Label for screen readers to improve accessibility */}
      <label htmlFor="language-selector" className="sr-only">
        Select language
      </label>
      
      {/* Language selector dropdown */}
      <select
        id="language-selector"
        value={locale}
        onChange={handleLanguageChange}
        className="rounded-md border border-gray-300 bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Select language"
      >
        {locales.map((lng) => (
          <option
            key={lng}
            value={lng}
            aria-label={lng === 'en' ? 'English' : lng === 'es' ? 'Español' : lng}
          >
            {lng === 'en' ? 'English' : lng === 'es' ? 'Español' : lng}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
