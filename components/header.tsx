import Image from 'next/image';
import { useState } from 'react';

import styles from 'styles/header.module.css';

const pages = [
  { href: '#home', name: 'Home' },
  { href: '#about', name: 'About' },
  { href: '#projects', name: 'Projects' },
  { href: '#contact', name: 'Contact' },
];

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Image src="/logo.png" alt="logo" width="48" height="48" />

        <button
          onClick={() => setOpenMenu((prevState) => !prevState)}
          className={openMenu ? styles.closeButton : styles.openButton}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={openMenu ? styles.openMenu : styles.closeMenu}>
          {pages.map(({ href, name }, index) => (
            <li key={index}>
              <a
                href={href}
                onClick={() => setActiveIndex(index)}
                className={activeIndex === index ? styles.activeLink : styles.normalLink}
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
