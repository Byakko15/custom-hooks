import {useState} from "react";

export const useCounter = (initialValue = 15) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter(counter + value);
  };
  const decrement = () => {
    if (counter >= 1) setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
