import React from 'react';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import { withData } from '../hoc-helpers/';

const { getAllPeople } = new SwapiService();

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped { ...props }>
        {fn}
      </Wrapped>
    )
  };
};

const renderName = ({name}) => <span>{name}</span>

const PersonList = withData(
                      withChildFunction(ItemList, renderName),
                      getAllPeople);

const StarshipList = () => {};

const PlanetList = () => {};

export {
  PersonList,
  StarshipList,
  PlanetList
};