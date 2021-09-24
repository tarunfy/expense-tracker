import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

//const store = createStore(testReducer);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/*<Provider store={store}>*/}
      <App />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
      </Switch>
      {/*</Provider>*/}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
