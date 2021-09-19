import { INCREASE_COUNTER, DECREASE_COUNTER } from "./counterConstants";

export const increase = () => {
    return { type: INCREASE_COUNTER, payload: 1 };
};

export const decrease = () => {
    return { type: DECREASE_COUNTER, payload: 1 };
};
