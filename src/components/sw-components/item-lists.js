import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers/';

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

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const PersonList = withSwapiService (
                    withData (
                      withChildFunction(ItemList, renderName)), 
                    mapPersonMethodsToProps
)

const StarshipList = () => {};

const PlanetList = () => {};

export {
  PersonList,
  StarshipList,
  PlanetList
};