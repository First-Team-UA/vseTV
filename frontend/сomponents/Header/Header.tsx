
import React from 'react';
import Link from 'next/link';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

const Header = () => {
  return (
    <div className="flex items-center justify-between   w-full">
      <div>
        <Link href="/">
          <span className="cursor-pointer">Logo</span>
        </Link>
      </div>
      <div className="flex space-x-20">
        <LangSwitcher/>
        <div>Switcher theme</div>

      </div>
    </div>
  );
};

export default Header;
