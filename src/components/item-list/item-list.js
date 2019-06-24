import React, { Component } from 'react';

import './item-list.css';
import Spinner from '../spinner';

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

const withData = (View) => {
  return class extends Component {

    state = {
      data: null
    }
  
    componentDidMount() {
      const { getData } = this.props;
      getData()
      .then((data) => {
        this.setState({
          data: data,
        });
      });
    }
  

    render() {

    const { data } = this.state;
    
    if (!data) {
      return <Spinner />
    }

      return <View { ...this.props } data={data}/>;
    }

  };
};

export default withData(ItemList);