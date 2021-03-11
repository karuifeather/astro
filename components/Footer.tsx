import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href='#' target='_blank' className={styles.footer__link}>
        Created by mE
      </a>
    </footer>
  );
};

export default Footer;
