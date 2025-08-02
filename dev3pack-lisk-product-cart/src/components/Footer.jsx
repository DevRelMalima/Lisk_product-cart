import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/?ref=challenge"
          target="_blank"
          className={styles.link}
        >
          Lisk Dev3pack Bootcamp
        </a>
      </span>
      <span className={styles.divider}>│</span>
      <span>
        Coded by{" "}
        <a
          href="https://www.linkedin.com/in/devrelmalima/"
          target="_blank"
          className={styles.link}
        >
          Malima
        </a>
      </span>
    </footer>
  );
}

export default Footer;
