import { createSlice } from "@reduxjs/toolkit";
/* import { createStore } from "redux"; */
/* export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const INCREASE = "increase"; */
const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggle(state) {
			state.showCounter = !state.showCounter;
		},
	},
});
/* const counterReducer = (state = initialState, action) => {
	if (action.type == INCREMENT) {
		return {
			counter: state.counter + 1,
			showCounter: state.showCounter,
		};
	} else if (action.type == DECREMENT) {
		return {
			counter: state.counter - 1,
			showCounter: state.showCounter,
		};
	} else if (action.type == INCREASE) {
		return {
			counter: state.counter + action.amount,
			showCounter: state.showCounter,
		};
	} else if (action.type == "toggle") {
		return {
			counter: state.counter,
			showCounter: !state.showCounter,
		};
	}
	return state;
};

const store = createStore(counterReducer); */
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
