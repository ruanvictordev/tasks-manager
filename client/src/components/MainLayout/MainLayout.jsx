import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="p-10 max-md:p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;