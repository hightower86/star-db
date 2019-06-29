import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';
import { PersonList } from '../sw-components/item-lists';
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
      <ItemDetails 
        itemId={11}
        getData={this.swapiService.getPerson}
        getImageUrl={this.swapiService.getPersonImage} >

        <Record field='gender' label='Gender' />
        <Record field='eyeColor' label='Eye Color' />

      </ItemDetails>
    );

    return (
      <div>
        <Row left={itemList} right={personDetails}/>
      </div>
    );
  }
}
