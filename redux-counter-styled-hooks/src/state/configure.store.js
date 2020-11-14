import {
  createStore,
  applyMiddleware
} from "redux";
import {
  composeWithDevTools
} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/root.reducer";
import {
  loadState,
  saveState
} from "./localStorage";

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action); //, store.getState())
  next(action);
  console.log("next state", store.getState());
};

const middleware = applyMiddleware(logger, thunk);

const persistedState = loadState();

const initialState = {
  count: 10,
  color: false
};


if (persistedState !== undefined) {
  initialState = persistedState;
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(middleware)
);

store.subscribe(() => {
  saveState({
    count: store.getState().count,
    color: store.getState().color,
    person: store.getState().person
  });
});

export default store;