
import React, { ReactNode } from 'react';
import Sidebar from '../Components/Sidebar';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        
      </header>
      <aside>
        <Sidebar />
      </aside>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
