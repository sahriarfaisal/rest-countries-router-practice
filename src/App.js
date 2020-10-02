import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import AboutCountry from './Components/AboutCountry/AboutCountry';


function App() {


  return (
  <div>
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about/:countryName">
          <AboutCountry></AboutCountry>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
