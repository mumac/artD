
export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

export function startLoading() {
    return (dispatch, _) => {
        dispatch({
            type: START_LOADING
        });
    };
}

export function endLoading() {
    return (dispatch, _) => {
        dispatch({
            type: END_LOADING
        });
    };
}

