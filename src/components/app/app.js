import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Particles from  'react-particles-js';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage, SecretPage, LoginPage } from '../pages';
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
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    console.log('isLoggedIn pressed');
    this.setState({
      isLoggedIn: true
    })
  }

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

    const { hasError, isLoggedIn } = this.state;

    if (hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundry>
        <Particles className='particles'/>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
              <Header onServiceChange={this.onServiceChange}/>
              <RandomPlanet />
            <Switch>  
              <Route path='/' 
                    render={()=><h2>Welcome to StarDB</h2>} 
                    exact/>

              <Route path='/people/:id?' component={PeoplePage} />
              <Route path='/planets/' exact component={PlanetPage} />
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
              <Route path='/secret' 
                    render={() => {
                      return <SecretPage 
                                isLoggedIn={isLoggedIn}/>
                      }} />
              <Route path='/login' 
                    render={() => {
                      return <LoginPage
                          isLoggedIn={isLoggedIn}
                          onLogin={this.onLogin} />
                      }} />
            {/* последний в свитче роут сработает, если не найден ни один путь перед ним. */}
              <Route render={() => <h3 className='warning'>Page not found</h3>} />
            </Switch> 
          </Router>
         
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};