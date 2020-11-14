import {
  INCREMENT,
  DECREMENT
} from "../actions/count.actions";



const reducer = (state = 3, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};
export default reducer;