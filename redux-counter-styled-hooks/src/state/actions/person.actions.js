//actions types
export const FETCH_PERSON_START = "FETCH_PERSON_START";
export const FETCH_PERSON_SUCCESS = "FETCH_PERSON_SUCCESS";
export const FETCH_PERSON_FAIL = "FETCH_PERSON_FAIL";

//normal action creators - syncronous
const fetch_person_start = () => ({
  type: FETCH_PERSON_START
});
const fetch_person_success = payload => ({
  type: FETCH_PERSON_SUCCESS,
  payload
});
const fetch_person_fail = payload => ({
  type: FETCH_PERSON_FAIL,
  payload
});

// async action creators - aka thunks
export function fetchRandomPerson() {
  return async dispatch => {
    try {
      dispatch(fetch_person_start()); // START
      const response = await fetch(`https://randomuser.me/api/`);
      const data = await response.json();
      dispatch(fetch_person_success(data.results[0])); // SUCCESS
    } catch (error) {
      dispatch(fetch_person_fail(error.message)); // FAILED
    }
  };
}
