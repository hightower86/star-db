import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import Row from '../../containers/row';
import PeoplePage from '../people-page';
import TogglerRandomPlanet from '../toggler-random-planet';
import ErrorIndicator from '../error-indicator';
import PlanetPage from '../planet-page';

import './app.css';
import SwapiService from '../../services/swapi-service';
import ItemDetails from '../item-details';

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
    const { getPerson, getStarship } = this.swapiService;
    
    const personDetails = (
      <ItemDetails 
        itemId={11}
        getData={getPerson} />
    );

    const starshipDetails = (
      <ItemDetails 
        itemId={3}
        getData={getStarship}  />
    );


    return (

      <div>
        <Header />
        {planet}

        <Row left={personDetails} right={starshipDetails} />

        {/* <TogglerRandomPlanet 
          onToggleRandomPlanet={this.onToggleRandomPlanet}
        />
        <PeoplePage /> */}
        {/* <PlanetPage /> */}
        
      
      </div>
    );
  }
};