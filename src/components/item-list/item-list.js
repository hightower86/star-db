import React, { Component } from 'react';

import './item-list.css';
import Spinner from '../spinner';

class ItemList extends Component {

  
  renderItems = (arr) => {
    return arr.map((item) => {

      const { id } = item;
      const label = this.props.children(item);

      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
            {label}
        </li>
      );
    })
  }

  render() {

    const items = this.renderItems(itemList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}

const f = () => {
  return class extends Component {

    state = {
      itemList: null
    }
  
    componentDidMount() {
      const { getData } = this.props;
      getData()
      .then((items) => {
        this.setState({
          itemList: items,
        });
      });
    }
  

    render() {

    const { itemList } = this.state;
    
    if (!itemList) {
      return <Spinner />
    }

      return <ItemList { ...this.props }/>;
    }

  };
};

export default f();