import { combineReducers } from "redux";
import countReducer from "./count.reducer";
import personReducer from "./person.reducer";
import colorReducer from "./color.reducer";

const rootReducer = combineReducers({
  count: countReducer,
  person: personReducer,
  color : colorReducer
});

export default rootReducer;
