import React, { useContext } from "react";
import "./App.css";
import { GlobalContext } from "./globalState";
import { INCREASE_COUNTER, DECREASE_COUNTER } from "./counterConstants";

function App() {
    const { state, dispatch } = useContext(GlobalContext);

    return (
        <div className="App">
            <h2>Redux vs Context API - Context API Approach</h2>
            <div className="counter">
                <button
                    className="item"
                    onClick={() => dispatch({ type: INCREASE_COUNTER })}
                >
                    +
                </button>
                <p>{state.counter}</p>
                <button
                    className="item"
                    onClick={() => dispatch({ type: DECREASE_COUNTER })}
                >
                    -
                </button>
            </div>
        </div>
    );
}

export default App;
