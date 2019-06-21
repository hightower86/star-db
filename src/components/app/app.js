import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import TogglerRandomPlanet from '../toggler-random-planet';
import ErrorIndicator from '../error-indicator';

import './app.css';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  componentDidCatch() {
    console.log('-----------------------');
    console.log('componentDidCatch()');
    console.log('-----------------------');
    this.setState({
      hasError: true
    });
  }

  onToggleRandomPlanet = () => {
    this.setState ((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (

      <div>
        <Header />
        {planet}
        <TogglerRandomPlanet 
          onToggleRandomPlanet={this.onToggleRandomPlanet}
        />
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
};