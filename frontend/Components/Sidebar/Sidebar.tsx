
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <header>
      <Link href="/">
              Logo
            </Link>
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
      <button>Logaut</button>
    </header>
  );
};

export default Sidebar;
