import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import App from "./components/App";
import { bookReducer } from "./reducers/bookReducer";
import { userReducer } from "./reducers/userReducer";

const combined = combineReducers({
  bookReducer,
  userReducer
});
/**
 * createStore  -Creates a Redux store that holds the state tree.
 * @param reducer A function that returns the next state tree, given the
 *   current state tree and the action to handle.
 * @returns A Redux store that lets you read the state, dispatch actions and
 *   subscribe to changes.
 */
const myStore = createStore(combined);

/**
 * Provider - is a "react-redux" built-in component
 * Makes the Redux store available to the connect()
 * calls in the component hierarchy below.
 */
render(
  <Provider store={myStore}>
    {/*inside Provider we can create only one element (like return in render function)*/}
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById("root")
);
