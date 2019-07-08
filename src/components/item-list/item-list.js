import React from 'react';
import withData from '../hoc-helpers/with-data';

import './item-list.css';

const ItemList = (props) => {

  const { data, onItemSelected, children } = props;

  const items = data.slice(5).map((item) => {

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

ItemList.defaultProps = {
  onItemSelected: ()=>{}
}

export default withData(ItemList);