import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage } from '../pages';
import ErrorIndicator from '../error-indicator';

import './app.css';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService()
  };

  componentDidCatch() {

    this.setState({
      hasError: true
    });
  }

  onToggleRandomPlanet = () => {
    this.setState ((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

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
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
         <SwapiServiceProvider value={this.state.swapiService}>
          <Header onServiceChange={this.onServiceChange}/>
          {planet}
          <PeoplePage />
          <PlanetPage />
          
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};