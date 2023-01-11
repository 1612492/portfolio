import Image from 'next/image';
import styles from 'styles/project.module.css';

function Project() {
  return (
    <section id="projects" className={styles.projects}>
      <section className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <section className={styles.cardGroup}>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <article key={index} className={styles.card}>
                <section className={styles.cardImage}>
                  <Image src="/project.jpeg" alt="project" layout="fill" objectFit="cover" />
                </section>
                <h5 className={styles.cardTitle}>MinimaL Design</h5>
                <p className={styles.paragraph}>Animated, portfolio</p>
              </article>
            ))}
        </section>
      </section>
    </section>
  );
}

export default Project;
