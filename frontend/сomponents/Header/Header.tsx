import React from 'react';
import Link from 'next/link';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import { HeaderContainer, LogoContainer, SwitcherContainer } from './Header.style';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link href="/">
          <span>VseTV {/* ЗАГЛУШКА */}</span>
        </Link>
      </LogoContainer>
      <SwitcherContainer>
        <LangSwitcher />
        <div>Switcher theme</div>
      </SwitcherContainer>
    </HeaderContainer>
  );
};

export default Header;
