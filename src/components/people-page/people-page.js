import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';
import './people-page.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();
  
  state = {
    selectedPerson: 3,
    hasError: false
  }

  componentDidCatch(error, info) {
    // debugger;
    this.setState({ hasError: true });
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    }); 
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
        <ItemList onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPeople}
                    renderItem={({ name, birthYear, gender }) => (
                         <span>{name} ( birth year : {birthYear},
                         gender: {gender} ) 
                        <button className='ml-2 btn btn-info'>!</button></span>
                    )}
          />
    )

    const personDetails =  (
        <PersonDetails personId={this.state.selectedPerson}/>
    )

    return (
      <div className="row mb2 people-page">
        <div className="col-md-6">
          {itemList}
        </div>
        <div className="col-md-6">
          {personDetails}
        </div>
      </div>
    );
  }
}
