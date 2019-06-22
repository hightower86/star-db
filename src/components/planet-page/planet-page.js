import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PlanetDetails from '../planet-details';
import SwapiService from '../../services/swapi-service';

export default class PlanetPage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPlanet: 3,
    hasError: false
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true});
  }

  onPlanetSelected = (id) => {
    this.setState({
      selectedPlanet: id
    });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return(
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPlanetSelected}
                    getData={this.swapiService.getAllPlanets}
                    renderItem={({ name, population, diameter }) => (
                        <span>{name} ( population : {population},
                        diameter: {diameter} ) 
                        <button className='ml-2 btn btn-info'>!</button></span>
                    )}
          />
        </div>
        <div className="col-md-6">
          <PlanetDetails planetId={this.state.selectedPlanet}/>
        </div>
      </div>
    );
  }
}