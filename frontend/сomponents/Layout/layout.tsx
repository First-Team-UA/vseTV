import React, { ReactNode } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">

      <aside className="w-[252px] h-screen">
        <Sidebar />
      </aside>


      <div className="flex-1 flex flex-col">

        <header className="h-16 ">
          <Header />
        </header>


        <main className="flex-1  overflow-y-auto ">

          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;