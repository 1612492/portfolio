import styles from 'styles/contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <section className={styles.container}>
        <h2 className={styles.title}>Contact me</h2>
        <form className={styles.form}>
          <input name="email" placeholder="Your email" type="email" className={styles.input} />
          <textarea
            name="comment"
            placeholder="Leave a comment"
            rows={5}
            className={styles.input}
          />
          <button className={styles.button}>Submit</button>
        </form>
      </section>
    </section>
  );
}

export default Contact;
