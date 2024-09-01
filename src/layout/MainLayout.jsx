import React from 'react';
import Header from './Header';
import Footer from './Footer';

function MainLayout({ children }) {
  
  return (
    <div className="MainLayout">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;