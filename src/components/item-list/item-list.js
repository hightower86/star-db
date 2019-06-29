import React from 'react';
import withData from '../hoc-helpers/with-data'

import './item-list.css';
import SwapiService from '../../services/swapi-service';

const ItemList = (props) => {

  const { data, onItemSelected, children } = props;

  const items = data.map((item) => {

    const { id } = item;
    const label = children(item);

    return (
      <li className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}>
          {label}
      </li>
    );
  })

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
}


const { getAllPeople } = new SwapiService()

export default withData(ItemList, getAllPeople);