import React,{useState} from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [count, setCount] =useState(0)
  // NOTE: do not delete `data-cy` key value pair

  const incrementCount=() =>{
    setCount(count+1);
  }

  const decrementCount =() =>{
    setCount(count-1);
  }
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={incrementCount}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={decrementCount}>-</button>
    </div>
  );
};

export default Counter;
