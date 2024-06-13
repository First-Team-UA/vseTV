
import React, { ReactNode } from 'react';
import Header from '../Components/Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <aside>
        
      </aside>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
