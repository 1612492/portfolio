import Image from 'next/image';

import styles from 'styles/history.module.css';

const history = [
  { src: '/dayone.png', alt: 'Dayone' },
  { src: '/vin-hms.png', alt: 'Vin HMS' },
  { src: '/trusting-social.png', alt: 'Trusting social' },
  { src: '/sisu-network.png', alt: 'Sisu network' },
  { src: '/run2n.png', alt: 'Run2n' },
  { src: '/upwork.png', alt: 'Upwork' },
];

function History() {
  return (
    <section className={styles.history}>
      <section className={styles.container}>
        <section className={styles.exp}>
          <span className={styles.expNum}>
            3<span className={styles.plusIcon}>+</span>
          </span>
          <span className={styles.expText}>Years Experience Working</span>
        </section>
        <section className={styles.cardGroup}>
          {history.map(({ src, alt }, index) => (
            <article key={index} className={styles.card}>
              <Image src={src} alt={alt} layout="fixed" width="140" height="140" />
            </article>
          ))}
        </section>
      </section>
    </section>
  );
}

export default History;
