import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import Videopage from './components/Videopage';
import { Route, Switch } from "react-router";
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
const endpoint = "https://f5b4a324-eb36-4d5b-9125-80a35c62b6fa.mock.pstmn.io/v1/videos"
function App() {
  return (
    <Router>
    <React.StrictMode>
    <div className="App">
      <Switch>
      
      <Route path="/video/:id" >
        <Videopage />
      </Route>
      <Route exact path="/" >
        <Main />
      </Route>
      </Switch>
     
      {/* <Header /> */}
      {/* <header className="App-header">
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
      </header> */}
    </div>
    </React.StrictMode>
    </Router>
  );
}

export default App;
