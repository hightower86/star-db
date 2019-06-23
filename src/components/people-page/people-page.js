import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../../containers/row';
import ErrorBoundry from '../error-boundry';
import './people-page.css';

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
      <ItemList onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(i) => (
          `${i.name} (${i.birthYear})`
        )}

      </ItemList>
    )

    const personDetails =  (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson}/>
      </ErrorBoundry>
    )

    return (
      <Row left={itemList} right={personDetails}/>
    );
  }
}
