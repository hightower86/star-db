import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import { PersonList, PersonDetails } from '../sw-components';
import Row from '../../containers/row';
import './pages.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 1
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    }); 
  }

  render() {

    const itemList = (
      <PersonList onItemSelected={this.onPersonSelected}/>
    )

    const personDetails = (
      <PersonDetails itemId={this.state.selectedPerson}/>
     );

    return (
      <div>
        <Row left={itemList} right={personDetails}/>
      </div>
    );
  }
}
