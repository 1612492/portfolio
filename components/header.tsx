import Image from 'next/image';
import { useState } from 'react';

import styles from 'styles/header.module.css';
import classnames from 'utils/classnames';

const pages = [
  { href: '#home', name: 'Home' },
  { href: '#about', name: 'About' },
  { href: '#services', name: 'Services' },
  { href: '#projects', name: 'Projects' },
  { href: '#contact', name: 'Contact' },
];

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Image src="/logo.png" alt="logo" width="48" height="48" />

        <ul className={styles.menu}>
          {pages.map(({ href, name }, index) => (
            <li key={index}>
              <a
                href={href}
                className={classnames(
                  index === activeIndex ? styles.activeLink : styles.normalLink
                )}
                onClick={() => setActiveIndex(index)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
