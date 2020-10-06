import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxThunk from "redux-thunk"
import Provider from "react-redux"
import {createStore, applyMiddleware} from "redux"
import combineReducers from './Redux/Reducers'

const store = createStore(combineReducers,{}, applyMiddleware(ReduxThunk))



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
