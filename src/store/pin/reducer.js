import { SET_PIN } from "./actions";

const initialState = {
    pin: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PIN:
            const { pin } = action;
            return {
                ...state,
                pin
            };
        default:
            return state;
    }
}