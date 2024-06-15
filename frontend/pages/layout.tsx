
import React, { ReactNode } from 'react';
import Sidebar from '../сomponents/Sidebar/Sidebar';
import Header from '../сomponents/Header/Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>HEADER</h1>
        <Header />
      </header>
      <aside>
      <h1>SIDEBAR</h1>
        <Sidebar />
      </aside>

      <main>
      <h1>MAIN</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
