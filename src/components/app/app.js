import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import ErrorIndicator from '../error-indicator';

import './app.css';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import { StarshipDetails, PlanetDetails } from '../sw-components';

export default class App extends Component {

  state = {
    hasError: false,
    swapiService: new SwapiService()
  };

  componentDidCatch() {

    this.setState({
      hasError: true
    });
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {

      const Service = swapiService instanceof SwapiService ? 
                        DummySwapiService : SwapiService;
      console.log('switched to ' + Service.name);   
      
      return {
        swapiService: new Service()
      };

    });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <Header onServiceChange={this.onServiceChange}/>
            <RandomPlanet />
            <Route path='/' 
                   render={()=><h2>Welcome to StarDB</h2>} 
                   exact/>
             <Route path='/people' 
                   render={()=><h2>People</h2>} 
                   exact/>
            <Route path='/people/:id?' component={PeoplePage} />
            <Route path='/planets' 
                   render={()=><h2>Planets</h2>} 
                   exact/>
            <Route path='/planets' exact component={PlanetPage} />
            <Route path='/planets/:id' 
                   render={({ match })=>{
                     const { id } = match.params;
                     return <PlanetDetails itemId={id} />
                   }}/>
            <Route path='/starships' exact component={StarshipPage}/> 
            <Route path='/starships/:id' 
                   render={({ match })=>{
                     const { id } = match.params;
                     return <StarshipDetails itemId={id} />
                   }}/>
            
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};