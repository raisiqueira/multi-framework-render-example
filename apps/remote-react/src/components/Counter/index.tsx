import React from "react";
import "../../index.css";
import styles from "./Counter.module.css";

const Couter = () => {
  const [count, setCount] = React.useState(0);

  const reset = () => {
    setCount(0);
  };
  return (
    <div className={styles.counter__container}>
      <div className={styles.p1}>
        <div className={styles.p2}>
          <p className={styles.title}>ReactJS Counter</p>
          <p className={styles.description}>
            This component is a simple counter that uses React.
          </p>
          <p>{count}</p>
          <div className={styles.buttons__container}>
            <button
              type="button"
              onClick={() => setCount(count + 1)}
              className={styles.button__increment}
            >
              Increment
            </button>
            <button
              type="button"
              onClick={reset}
              className={styles.button__reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couter;
