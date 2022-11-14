import Image from 'next/image';

import styles from 'styles/about.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <section className={styles.container}>
        <section className={styles.illustration}>
          <section className={styles.imageContainer}>
            <Image
              src="/about-illustration.png"
              alt="illustration"
              layout="fixed"
              width="687"
              height="631"
            />
          </section>
        </section>
        <section className={styles.intro}>
          <h2 className={styles.title}>
            Let&apos;s
            <br /> introduce about
            <br /> myself
          </h2>
          <p className={styles.paragraph}>
            Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst
            their. Beast creepeth. Fish days.
          </p>
          <p className={styles.paragraph}>
            Is give may shall likeness made yielding spirit a itself together created after sea is
            in beast beginning signs open god you&apos;re gathering whose gathered cattle let.
            Creature whales fruit unto meat the life beginning all in under give two.
          </p>
          <button className={styles.button}>Download CV</button>
        </section>
      </section>
    </section>
  );
}

export default About;
