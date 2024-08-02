import styled from 'styled-components';

export const SidebarContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--color-bg-light);
  height: 100vh;
  .icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  
`;

export const LogoLink = styled.a`
  font-size: 1.5rem;
  cursor: pointer;
  margin-top: 32px;
  margin-left: 40px;
  margin-bottom: 89px;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center; 
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  width: 208px;
  height: 40px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-size: var(--font-size-18);
  cursor: pointer;
  color: var(--color-tertiary);
  align-items: center;
  display: flex;
  padding: 8px 16px;
  border-radius: 4px;
  
  svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    fill: var(--color-tertiary); 
 
  }

  &:hover {
    background-color: transparent; 
    text-decoration: none; 
  }

  &.active {
    background-color: var(--color-active); 
    border-radius: 20px;
    svg {
      fill: #b377f2;
    }
  }
`;


export const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: transparent;
  cursor: pointer;
  color: var(--color-tertiary);
  position: absolute;
  left: 32px;
  bottom: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-18);
  height: 40px;
  width: 116px;
`;
