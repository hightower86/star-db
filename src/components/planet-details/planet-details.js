import React, { Component } from 'react';

import './planet-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

export default class PlanetDetails extends Component {

  swapiService = new SwapiService();

  state = {
    planet: null,
    loading: true
  }

  componentDidMount() {
    this.updatePlanet();
  }

  componentDidUpdate(prevProps) {
    if (this.props.planetId !== prevProps.planetId) {
      this.setState({
        loading: true
      })
      this.updatePlanet();
    }
  }

  updatePlanet() {
    const { planetId } = this.props;
    if (!planetId) {
      return null;
    }

    this.swapiService.getPlanet(planetId)
    .then((planet) => {
      this.setState({ planet,
                      loading: false });
    });
  }

  render() {

    const hasData = !this.state.loading;

    const content = hasData ? <PlanetView planet={this.state.planet}/> : null ;
    const spinner = !hasData ? <Spinner/> : null;

    return (
      <div className="planet-details card">
        {spinner}
        {content}
      </div>
    )
  }
}

const PlanetView = ({ planet }) => {

  const { id, name, population, 
    rotationPeriod, diameter } = planet;     

  return (
    <React.Fragment>
      <img className="planet-image" alt='soon'
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  )
}