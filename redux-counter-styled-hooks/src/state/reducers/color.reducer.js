import {
    CHANGE_COLOR
} from "../actions/color.actions";

export const initialState = {
    color: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_COLOR:
            return action.color
            // return state = action.color;
        default:
            return state;

    }
}
export default reducer;