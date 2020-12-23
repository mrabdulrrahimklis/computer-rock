import { SET_LIGHT } from "./actions";

const initialState = {
    light: '#47b2b2'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LIGHT:
            const { light } = action;
            return {
                ...state,
                light
            };
        default:
            return state;
    }
}