import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const SidebarContainer = styled.aside`
  width: 252px;
  height: 100vh;
  margin-right: 16px; 
`;

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const HeaderContainer = styled.header`
  height: 64px;
`;

export const ContentContainer = styled.main`
  flex: 1;
  overflow-y: auto;
`;
