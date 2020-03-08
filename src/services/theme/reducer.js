import {
    START_LOADING,
    END_LOADING,
} from "./actions";

export const initialState = {
    isLoading: false
};

export default function reduce(state = initialState, action) {

    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case END_LOADING:
            return {
                ...state,
                isLoading: false
            };

        default:
            return state;
    }
}
