import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Views/home';
import Travel from './Views/travel';
import Flight from './Views/flight';
import FlightStatus from './Views/flightStatus';
import Nav from './Componets/navBar'
import * as routes from './routes'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path={routes.HOME} component={Home}/>
        <Route exact path={routes.TRAVEL} component={Travel}/>
        <Route exact path={routes.STATUS} component={FlightStatus}/>
        <Route exact path={routes.FLINGH} component={Flight}/>
      </Switch>
    </BrowserRouter>
  );
}

