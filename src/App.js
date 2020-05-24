import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
