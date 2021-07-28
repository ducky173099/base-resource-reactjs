import {
    DECREMENT_COUNT,
    INCREMENT_COUNT
} from './ActionTypes';

export const decrementAction = (step) => ({
    type: DECREMENT_COUNT,
    step: step
})

export const incrementAction = (step) => ({
    type: INCREMENT_COUNT,
    step: step
})