import React, { Component } from 'react';
import { StarshipDetails, StarshipList } from '../sw-components';
import Row from '../../containers/row';
import './pages.css';

export default class StarshipPage extends Component {

  state = {
    selectedStarship: 11
  }

  onStarshipSelected = (id) => {
    //console.log(id);
    this.setState({
      selectedStarship: id
    }); 
  }

  render() {

    const itemList = (
      <StarshipList onItemSelected={this.onStarshipSelected}/>
    );

    const starshipDetails = (
      <StarshipDetails itemId={this.state.selectedStarship}/>
     );

    return (
      <div>
        <Row left={itemList} right={starshipDetails}/>
      </div>
    );
  }
}
