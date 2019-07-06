import React, { Component } from 'react';
import { StarshipDetails, StarshipList } from '../sw-components';
import Row from '../../containers/row';
import './pages.css';

export default class StarshipPage extends Component {

  state = {
    selectedStarship: 3
  }

  onStarshipSelected = (id) => {
    this.setState({
      selectedStarship: id
    }); 
  }

  render() {

    const itemList = (
      <StarshipList />
    );

    const starshipDetails = (
      <StarshipDetails itemId={2}/>
     );

    return (
      <div>
        <Row left={itemList} right={starshipDetails}/>
      </div>
    );
  }
}
