import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
/* import {INCREMENT,DECREMENT, INCREASE} from '../store/index'; */
import { counterActions } from '../store/counter'
const Counter = () => {
	const counter = useSelector((state) => state.counter.counter);
	const showCounter = useSelector((state) => state.counter.showCounter);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		//dispatch({ type: INCREMENT });
		dispatch(counterActions.increment());
	};
	const increaseHandler = () => {
		//dispatch({ type: INCREASE,amount:5 });
		dispatch(counterActions.increase(5));
	};
	const decrementHandler = () => {
		//dispatch({ type: DECREMENT });
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		//dispatch({ type: "toggle" });
		dispatch(counterActions.toggle());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increase By 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
