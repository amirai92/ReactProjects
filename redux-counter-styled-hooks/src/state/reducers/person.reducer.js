import {
  FETCH_PERSON_START,
  FETCH_PERSON_SUCCESS,
  FETCH_PERSON_FAIL
} from "../actions/person.actions";

export const initialState = {
  data: {},
  is_loading: false,
  error_msg: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERSON_START:
      return {
        ...initialState,
        is_loading: true
      };
    case FETCH_PERSON_SUCCESS:
      return {
        ...initialState,
        data: action.payload
      };
    case FETCH_PERSON_FAIL:
      return {
        ...initialState,
        error_msg: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
