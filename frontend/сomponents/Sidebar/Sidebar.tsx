import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  SidebarContainer,
  LogoLink,
  Nav,
  NavList,
  NavItem,
  NavLink,
  LogoutButton,
} from './sidebar.style';

const Sidebar = () => {
  const router = useRouter();

  return (
    <SidebarContainer>
      <LogoLink>
        <Link href="/" passHref>
          VseTV {/* ЗАГЛУШКА */}
        </Link>
      </LogoLink>
      <Nav>
        <NavList>
          <NavItem>
            <Link href="/" passHref>
              <NavLink className={router.pathname === '/' ? 'active' : ''}>
                <svg className='icon-nav'><use xlinkHref='#icon-dashboard-icon' /></svg>
                Dashboard
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/profile" passHref>
              <NavLink className={router.pathname === '/profile' ? 'active' : ''}>
                <svg className='icon-nav'><use xlinkHref='#icon-profile' /></svg>
                Profile
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/channels" passHref>
              <NavLink className={router.pathname === '/channels' ? 'active' : ''}>
                <svg className='icon-nav'><use xlinkHref='#icon-tvchannels' /></svg>
                My Channels
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/contacts" passHref>
              <NavLink className={router.pathname === '/contacts' ? 'active' : ''}>
                <svg className='icon-nav'><use xlinkHref='#icon-contacts' /></svg>
                Contacts
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/test" passHref>
              <NavLink className={router.pathname === '/test' ? 'active' : ''}>
                <svg className='icon-nav'><use xlinkHref='#icon-dashboard-icon' /></svg>
                Test
              </NavLink>
            </Link>
          </NavItem>
        </NavList>
      </Nav>
      <LogoutButton>
        <svg className='icon'><use xlinkHref='#icon-exit' /></svg>
        Logout
      </LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
