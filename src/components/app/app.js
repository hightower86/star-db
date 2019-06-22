import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import TogglerRandomPlanet from '../toggler-random-planet';
import ErrorIndicator from '../error-indicator';
import PlanetPage from '../planet-page';

import './app.css';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
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

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (

      <div>
        <Header />
        {planet}
        <TogglerRandomPlanet 
          onToggleRandomPlanet={this.onToggleRandomPlanet}
        />
        <PeoplePage />
        {/* <PlanetPage /> */}
        
      
      </div>
    );
  }
};