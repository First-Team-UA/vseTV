
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href="/">
              Logo
            </Link>

     <div>Switcher theme</div>
     <div>Switcher language</div>
    </header>
  );
};

export default Header;
