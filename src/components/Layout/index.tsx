import React from 'react';
import Header from '../Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Navbar */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4">{children}</main>

      {/* Footer */}
    </div>
  );
};

export default Layout;
