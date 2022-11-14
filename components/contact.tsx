import styles from 'styles/contact.module.css';

function Contact() {
  return (
    <section className={styles.contact}>
      <section className={styles.container}>
        <h2 className={styles.title}>Get update from anywhere</h2>
        <p className={styles.desc}>
          Bearing Void gathering light light his eavening unto dont afraid.
        </p>
        <form className={styles.form}>
          <input name="email" placeholder="Email address" type="email" className={styles.input} />
          <button className={styles.button}>Get started</button>
        </form>
      </section>
    </section>
  );
}

export default Contact;
