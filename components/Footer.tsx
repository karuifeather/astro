import styles from './footer.module.scss';
import Link from 'next/link';

interface FooterProps {
  home?: boolean;
}

const Footer = ({ home }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      {home ? (
        <a href='#' target='_blank' className={styles.footer__link}>
          Created by mE for his Next.js practice.
        </a>
      ) : (
        <a
          href='https://blog.prepscholar.com/'
          target='_blank'
          className={styles.footer__link}
        >
          All the articles were (manually) scraped from PrepScholar.
        </a>
      )}
    </footer>
  );
};

export default Footer;
