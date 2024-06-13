
import React, { ReactNode } from 'react';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
