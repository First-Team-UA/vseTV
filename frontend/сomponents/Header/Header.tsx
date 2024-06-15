
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex items-center justify-between   w-full">
      <div>
        <Link href="/">
          <span className="cursor-pointer">Logo</span>
        </Link>
      </div>
      <div className="flex space-x-20">
        <div>Switcher language</div>
        <div>Switcher theme</div>

      </div>
    </div>
  );
};

export default Header;
