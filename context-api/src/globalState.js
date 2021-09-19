import React, { createContext, useReducer } from "react";
import { counterAdjustReducer } from "./globalReducers";

const initialState = {
    counter: 0,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(counterAdjustReducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};
