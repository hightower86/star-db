import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import TogglerRandomPlanet from '../toggler-random-planet';
import ErrorIndicator from '../error-indicator';

import './app.css';
import SwapiService from '../../services/swapi-service';
import ItemDetails, { Record } from '../item-details';
import { SwapiServiceProvider } from '../swapi-service-context';

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
    const { getPerson, 
            getStarship, 
            getPersonImage,
            getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails 
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage} >

        <Record field='gender' label='Gender' />
        <Record field='eyeColor' label='Eye Color' />

      </ItemDetails>


    );

    const starshipDetails = (
      <ItemDetails 
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage} >
          <Record field='length' label='Length' />
          <Record field='costInCredits' label='Cost' />
      </ItemDetails>
    );


    return (

      <SwapiServiceProvider value={this.swapiService}>
        <Header />
        {planet}
        <TogglerRandomPlanet 
          onToggleRandomPlanet={this.onToggleRandomPlanet}
        />
        {/* <Row left={personDetails} right={starshipDetails} /> */}

        
        <PeoplePage />
        {/* <PlanetPage /> */}
        
      </SwapiServiceProvider>
    );
  }
};