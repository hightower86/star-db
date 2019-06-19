import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import TogglerRandomPlanet from '../toggler-random-planet';
// import Spinner from '../spinner';

import './app.css';

export default class App extends Component {

  state = {
    showRandomPlanet: true
  };

  onToggleRandomPlanet = () => {
    this.setState ((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div>
        <Header />
        {planet}
        <TogglerRandomPlanet onToggleRandomPlanet={this.onToggleRandomPlanet}/>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
};