import Image from 'next/image';

import styles from 'styles/banner.module.css';

function Banner() {
  return (
    <section id="home" className={styles.banner}>
      <section className={styles.container}>
        <section className={styles.greeting}>
          <h3 className={styles.hello}>
            Hello<div className={styles.line}></div>
          </h3>
          <h1 className={styles.name}>I am Phat Vo</h1>
          <h5 className={styles.role}>Front-end Developer</h5>
          <section className={styles.buttonGroup}>
            <button className={styles.solidButton}>Hire me</button>
            <button className={styles.outlinedButton}>Get CV</button>
          </section>
        </section>
        <section className={styles.illustration}>
          <Image
            src="/banner-illustration.png"
            alt="illustration"
            layout="fill"
            objectFit="contain"
          />
        </section>
      </section>
    </section>
  );
}

export default Banner;
