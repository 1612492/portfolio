import Image from 'next/image';
import styles from 'styles/project.module.css';

function Project() {
  return (
    <section className={styles.project}>
      <section className={styles.container}>
        <h2 className={styles.title}>
          QUALITY WORK
          <br />
          RECENTLY DONE PROJECT
        </h2>
        <section className={styles.group}>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <article key={index} className={styles.card}>
                <section className={styles.cardImage}>
                  <Image src="/project.webp" alt="placeholder" layout="fill" objectFit="cover" />
                </section>
                <h5 className={styles.cardTitle}>MinimaL Design</h5>
                <p>Animated, portfolio</p>
              </article>
            ))}
        </section>
      </section>
    </section>
  );
}

export default Project;
