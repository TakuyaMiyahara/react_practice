import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todo from "./reducers";
import { addTodo, toggleTodo, setVisibilityFilter } from "./actions";
import App from "./components/App";

let store = createStore(todo);
console.log(store.getState());
store.dispatch(addTodo("Hello React!"));
store.dispatch(addTodo("Hello Redux!"));
store.dispatch(setVisibilityFilter("SHOW_COMPLETED"));
store.dispatch(toggleTodo(0));
console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
