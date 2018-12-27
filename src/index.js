import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/counter";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./styles.css";

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default: {
      return state;
    }
  }
  return state;
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
