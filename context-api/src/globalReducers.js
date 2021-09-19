import { INCREASE_COUNTER, DECREASE_COUNTER } from "./counterConstants";

export const counterAdjustReducer = (state, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return { ...state, counter: state.counter + 1 };
        case DECREASE_COUNTER:
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
};
