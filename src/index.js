import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

//const store = createStore(testReducer);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/*<Provider store={store}>*/}
      <App />
      {/*</Provider>*/}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
