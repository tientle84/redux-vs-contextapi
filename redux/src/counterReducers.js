import { INCREASE_COUNTER, DECREASE_COUNTER } from "./counterConstants";

var defaultState = {
    counter: 0,
};

export const counterAdjustReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return { ...state, counter: state.counter + action.payload };
        case DECREASE_COUNTER:
            return { ...state, counter: state.counter - action.payload };
        default:
            return state;
    }
};
