import { combineReducers } from "redux";

import theme from "../../services/theme/reducer";


/**
 * The root reducer of our Redux store.
 */
export default combineReducers({
    theme,
});
