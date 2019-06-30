import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
// import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';
import { PersonList, PersonDetails } from '../sw-components/';
import Row from '../../containers/row';
import ErrorBoundry from '../error-boundry';
import './people-page.css';
import { directive } from '@babel/types';



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
      <PersonList> 
        {({name}) => <span>{name}</span>}
      </PersonList>
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
