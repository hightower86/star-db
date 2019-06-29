import React from 'react';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import { withData } from '../hoc-helpers/';

const { getAllPeople } = new SwapiService();

const PersonList = withData(ItemList, getAllPeople);

const StarshipList = () => {};

const PlanetList = () => {};

export {
  PersonList,
  StarshipList,
  PlanetList
};