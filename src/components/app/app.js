import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import ErrorIndicator from '../error-indicator';

import './app.css';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';

export default class App extends Component {

  state = {
    hasError: false,
    swapiService: new SwapiService()
  };

  componentDidCatch() {

    this.setState({
      hasError: true
    });
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {

      const Service = swapiService instanceof SwapiService ? 
                        DummySwapiService : SwapiService;
      console.log('switched to ' + Service.name);   
      
      return {
        swapiService: new Service()
      };

    });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundry>
         <SwapiServiceProvider value={this.state.swapiService}>
          <Header onServiceChange={this.onServiceChange}/>
          <RandomPlanet />
          <PeoplePage />
          <PlanetPage />
          <StarshipPage />
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};