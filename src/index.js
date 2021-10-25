import React from "react";
import ReactDOM from "react-dom";
// import Prototype1 from "../src/JavaScript Practice/Prototype-Inheritance";
//import Practice from "../src/JavaScript Practice/JavaScript";
//import Practice2 from "../src/JavaScript Practice/w3Schools";
//import PracticeArrays from "../src/JavaScript Practice/JavaScript Arrays";

import App from "./blog/components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./blog/reducers";

import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// ReactDOM.render(<Prototype1 />, document.querySelector("#root"));
