import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.linkFooter} href="#">
        Entenda como funciona a técnica pomodoro.
      </a>
      <a className={styles.linkFooter} href="#">
        Chronos Pomodoro &copy; {new Date().getFullYear()}
      </a>
    </footer>
  );
}
