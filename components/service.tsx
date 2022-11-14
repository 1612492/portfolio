import Image from 'next/image';

import styles from 'styles/service.module.css';

const services = [
  {
    src: '/frontend-dev.png',
    alt: 'Front-end Developer',
    title: 'Front-end',
    desc: "Creeping for female light years that lesser can't evening heaven isn't bearing tree",
  },
  {
    src: '/fullstack-dev.png',
    alt: 'Full-stack Developer',
    title: 'Full-stack',
    desc: "Creeping for female light years that lesser can't evening heaven isn't bearing tree",
  },
  {
    src: '/mobile-dev.png',
    alt: 'Mobile',
    title: 'Mobile Developer',
    desc: "Creeping for female light years that lesser can't evening heaven isn't bearing tree",
  },
];

function Service() {
  return (
    <section id="services" className={styles.service}>
      <section className={styles.container}>
        <h2 className={styles.title}>Service Offers</h2>
        <p className={styles.desc}>
          Is give may shall likeness made yielding spirit a itself togeth created after sea is in
          <br />
          beast beginning signs open god you&apos;re gathering ithe
        </p>
        <section className={styles.group}>
          {services.map(({ src, alt, title, desc }, index) => (
            <article key={index} className={styles.card}>
              <Image src={src} alt={alt} layout="fixed" width="100" height="100" />
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </article>
          ))}
        </section>
      </section>
    </section>
  );
}

export default Service;
