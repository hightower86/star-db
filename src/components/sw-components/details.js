import React from 'react';
import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';
import { withData } from '../hoc-helpers';

const swapiService = new SwapiService();

const { getPerson, getPersonImage } = swapiService;


const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails 
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage} >

      <Record field='gender' label='Gender' />
      <Record field='eyeColor' label='Eye Color' />

    </ItemDetails>
  )
};

const StarshipDetails = () => {};

const PlanetDetails = () => {};

export {
  PersonDetails,
  StarshipDetails,
  PlanetDetails
};