import {
    DECREMENT_COUNT,
    INCREMENT_COUNT
} from '../actions/ActionTypes';


// eslint-disable-next-line import/no-anonymous-default-export
export default function (count = 0,action) {
    switch (action.type) {
        case DECREMENT_COUNT:
            return count - action.step
        case INCREMENT_COUNT:
            return count + action.step
        default:
            return count;
    }
}
