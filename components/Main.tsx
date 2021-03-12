import Link from 'next/link';
import { useRef } from 'react';
import styles from './main.module.scss';
import { GetSign } from './GetSign';

interface SignData {
  contentHtml: string;
  title: string;
  author: string;
  avatar: string;
  date: string;
  article: string;
}
interface MainProps {
  handleSearch?: (date: GetSign) => void;
  home?: boolean;
  signData?: SignData;
}

const Main = ({ handleSearch, home, signData }: MainProps) => {
  const dateEl = useRef(null);

  // Parses string to date and sends it back to Parent component
  // 2021-03-23
  const onButtonClick = (dateString: string): void => {
    if (dateString.length === 0)
      return alert('Please enter your Date of Birth!');

    const [year, month, day] = dateString.split('-');

    const date = {
      month: parseInt(month),
      day: parseInt(day),
    };

    handleSearch(date);
  };

  const renderBlog = (): JSX.Element => {
    return (
      <>
        <Link href='/'>
          <a className={styles.goBack}>
            <h3>Go back</h3>
          </a>
        </Link>

        <div className={styles.author}>
          <div className={styles.author__left}>
            <img
              src={signData.avatar}
              alt={signData.author}
              className={styles.author__img}
            />
          </div>

          <div className={styles.author__right}>
            <h3>{signData.author}</h3>
            <h4>{signData.date}</h4>
            <a href={signData.article} target='_blank'>
              Read the orginal article
            </a>
          </div>
        </div>
        <article
          dangerouslySetInnerHTML={{ __html: signData.contentHtml }}
        ></article>
      </>
    );
  };

  const renderHome = (): JSX.Element => {
    return (
      <>
        <div className={styles.main__heading}>find your horoscope</div>
        <div className={styles.main__search_box}>
          <input
            ref={dateEl}
            type='date'
            className={styles.main__search_date}
          />
          <button
            onClick={() => onButtonClick(dateEl.current.value)}
            className={styles.main__search_find}
          >
            Search
          </button>
        </div>
      </>
    );
  };

  return (
    <main className={styles.main}>
      {home ? (
        <div className={styles.main__box}>{renderHome()}</div>
      ) : (
        <div className={styles.main__blog}>{renderBlog()}</div>
      )}
    </main>
  );
};

export default Main;
