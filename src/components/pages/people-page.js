import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import { PersonList, PersonDetails } from '../sw-components';
import Row from '../../containers/row';
import './pages.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    }); 
  }

  render() {

    const itemList = (
      <PersonList />
    )

    const personDetails = (
      <PersonDetails itemId={10}/>
     );

    return (
      <div>
        <Row left={itemList} right={personDetails}/>
      </div>
    );
  }
}
