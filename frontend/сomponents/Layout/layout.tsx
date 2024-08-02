import React, { ReactNode } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import {
  LayoutContainer,
  SidebarContainer,
  MainContainer,
  HeaderContainer,
  ContentContainer,
} from './layout.style';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      <MainContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <ContentContainer>
          {children}
        </ContentContainer>
      </MainContainer>
    </LayoutContainer>
  );
};

export default Layout;
