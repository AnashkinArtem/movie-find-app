import { combineReducers } from "redux";
import movieReducer from "./movieReduser";

const rootReducer = combineReducers({data: movieReducer});

export default rootReducer;