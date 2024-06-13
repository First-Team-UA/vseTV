
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/channels">
              My Channels
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              Contacts
            </Link>
          </li>
          <li>
            <Link href="/test">
              Test
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
