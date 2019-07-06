import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import { PlanetList, PlanetDetails } from '../sw-components';
import Row from '../../containers/row';
import './pages.css';

export default class PlanetPage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPlanet: 3
  }

  onPlanetSelected = (id) => {
    this.setState({
      selectedPlanet: id
    }); 
  }

  render() {

    const itemList = (
      <PlanetList onItemSelected={this.onPlanetSelected}/>
    )

    const planetDetails = (
      <PlanetDetails itemId={this.state.selectedPlanet}/>
     );

    return (
      <div>
        <Row left={itemList} right={planetDetails}/>
      </div>
    );
  }
}
