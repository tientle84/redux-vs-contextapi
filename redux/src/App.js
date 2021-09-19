import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./counterActions";
import "./App.css";

function App() {
    const counter = useSelector((state) => state.counterAdjust.counter);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h2>Redux vs Context API - Redux Approach</h2>
            <div className="counter">
                <button className="item" onClick={() => dispatch(increase())}>
                    +
                </button>
                <p>{counter}</p>
                <button className="item" onClick={() => dispatch(decrease())}>
                    -
                </button>
            </div>
        </div>
    );
}

export default App;
