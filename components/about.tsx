import Image from 'next/image';

import styles from 'styles/about.module.css';

const technologies = [
  'HTML, CSS, Javascript',
  'React, React Native, NextJS, Gatsby, Typescript, Redux',
  'Webpack, Rollup, Esbuild, Vite, Babel',
  'BEM, SASS, CSS Module, Bootstrap, TailwindCSS, CSS in JS',
  'Jest, React Testing Library, Storybook',
  'Google Tag Manager, Facebook Pixel, Strapi',
  'NodeJS, MongoDB, MySQL, PostgreSQL',
  'Git, Docker, Vim, AWS (S3, EC2)',
  'Web3 technologies (Ethereum, Cardano, Solana)',
];

function About() {
  return (
    <section id="about" className={styles.about}>
      <section className={styles.container}>
        <section className={styles.illustration}>
          <Image
            src="/about-illustration.png"
            alt="illustration"
            layout="fill"
            objectFit="contain"
          />
        </section>
        <section className={styles.content}>
          <h2 className={styles.title}>About me</h2>
          <section className={styles.paragraph}>
            I am a skilled and qualified front-end developer with three years of experience. Because
            of my curiosity and love of technology, I am also knowledgeable about back-end and
            blockchain technology.
            <br />I use the following technologies:
            <ul>
              {technologies.map((content, index) => (
                <li key={index}>
                  <i className={styles.icon}>⇨</i>
                  <span>{content}</span>
                </li>
              ))}
            </ul>
            I will advise you on the quickest, easiest, and most valuable options so that you can
            devote your time to more important issues.
            <br />
            Please contact me if you have any questions about the project.
          </section>
          <button className={styles.solidButton}>Download CV</button>
        </section>
      </section>
    </section>
  );
}

export default About;
