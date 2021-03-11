import { useState, useEffect, useRef } from 'react';

import styles from './main.module.scss';

const Main = () => {
  const dateEl = useRef(null);

  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(null);

  useEffect(() => {
    console.log(loading, date);
  }, [loading, date]);

  const onButtonClick = (date) => {
    setDate(date);
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
