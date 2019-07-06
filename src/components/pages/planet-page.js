import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import { PlanetList, PlanetDetails } from '../sw-components';
import Row from '../../containers/row';
import './people-page.css';

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
      <PlanetList />
    )

    const planetDetails = (
      <PlanetDetails itemId={4}/>
     );

    return (
      <div>
        <Row left={itemList} right={planetDetails}/>
      </div>
    );
  }
}
