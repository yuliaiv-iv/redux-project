import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/index';

const Counter = () => {

  const dispatch = useDispatch();

  const show = useSelector(state => {
    return state.counter.showCounter
  });

  const counter = useSelector(state => {
    return state.counter.counter
  });

  // const incrementHandler = () => {
  //   dispatch({ type: 'increment' });
  // };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  // const decrementHandler = () => {
  //   dispatch({ type: 'decrement' });
  // };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  // const increaseHandler = () => {
  //   dispatch({ type: 'increase', amount: 5 });
  // };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: 'toggle' });
  // };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className={classes.buttons}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </main>
  );
};

export default Counter;
