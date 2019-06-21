import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import Header from '../header';
import PeoplePage from '../people-page';
import RandomPlanet from '../random-planet';
import TogglerRandomPlanet from '../toggler-random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
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
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList 
              getData={this.swapiService.getAllPlanets}
              onItemSelected={this.onPersonSelected}/>
          </div>
          {/* <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div> */}
        </div>
      </div>
    );
  }
};