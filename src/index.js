import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import store from "./reduxStore";

import { actionOne, actionTwo } from "./reduxStore";

import "./styles.css";

const App = props => {
  console.log("props", props);
  let valTwo = "";
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>Value1: {props.reducerOne.propOne}</h2>
      <input onChange={e => props.rdxActionOne(e.target.value)} />
      <h2>Value2: {props.reducerTwo.propTwo}</h2>
      <input onChange={e => (valTwo = e.target.value)} />
      <button onClick={() => props.rdxActionTwo(valTwo)}>Update Value2</button>
    </div>
  );
};

const RdxApp = connect(
  state => ({ ...state }),
  dispatch => ({
    rdxActionOne: x => dispatch(actionOne(x)),
    rdxActionTwo: x => dispatch(actionTwo(x))
  })
)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <RdxApp />
  </Provider>,
  rootElement
);
