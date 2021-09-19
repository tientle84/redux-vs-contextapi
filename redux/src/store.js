import { combineReducers, createStore } from "redux";
import { counterAdjustReducer } from "./counterReducers";

const reducer = combineReducers({
    counterAdjust: counterAdjustReducer,
});

const store = createStore(reducer);
export default store;
