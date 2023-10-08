import { useDispatch, useSelector } from "react-redux";
import { increment } from "./actions";

function Counter() {
	const dispatch = useDispatch();
	const count = useSelector(state => state.counter.count);

	return (
		<div>
			<p>{count}</p>
			<button onClick={() => dispatch(increment())}>Increment</button>
		</div>
	)
}

export default Counter;