import { useRef } from 'react';
import styles from './main.module.scss';
import { GetSign } from './GetSign';
interface MainProps {
  handleSearch?: (date: GetSign) => void;
}

const Main = ({ handleSearch }: MainProps) => {
  const dateEl = useRef(null);

  // Parses string to date and sends it back to
  // Parent component
  // 2021-03-23
  const onButtonClick = (dateString: string): void => {
    const [year, month, day] = dateString.split('-');

    const date = {
      month: parseInt(month),
      day: parseInt(day),
    };

    handleSearch(date);
  };

  return (
    <main className={styles.main}>
      <div className={styles.main__box}>
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
      </div>
    </main>
  );
};

export default Main;
