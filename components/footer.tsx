import styles from 'styles/footer.module.css';
import Image from 'next/image';

const links = [
  { href: 'https://twitter.com/phatvo0509', src: '/twitter.png', alt: 'twitter' },
  { href: 'https://t.me/phatvo0509', src: '/telegram.png', alt: 'telegram' },
  { href: 'https://github.com/1612492', src: '/github.png', alt: 'github' },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <Image src="/logo.png" alt="logo" width="60" height="60" />
        <h4 className={styles.title}>Follow me</h4>
        <section className={styles.group}>
          {links.map(({ href, src, alt }, index) => (
            <a key={index} href={href} target="_blank" rel="noreferrer">
              <Image src={src} alt={alt} width="40" height="40" />
            </a>
          ))}
        </section>
        <p className={styles.copyright}>Copyright ©2022 by Phat Vo</p>
      </section>
    </footer>
  );
}

export default Footer;
