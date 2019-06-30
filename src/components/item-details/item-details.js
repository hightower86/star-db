import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ item[field] }</span>
    </li>
  );
};

export {
  Record
};
export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true,
    image: null
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({
        loading: true
      })
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return null;
    }

    getData(itemId)
    .then((item) => {
      this.setState({ 
        item,
        loading: false,
        image: getImageUrl(item) 
      });
    });
  }

  render() {

    const hasData = !this.state.loading;

    const content = hasData ? <ItemView item={this.state.item} image={this.state.image} that={this}/> : null ;
    const spinner = !hasData ? <Spinner/> : null;

    return (
      <div className="item-details card">
        {spinner}
        {content}
      </div>
    )
  }
}

const ItemView = ({ item, image, that }) => {

  const { name } = item;     

  return (
    <React.Fragment>
      <img className="item-image" alt='soon'
        src={image} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(that.props.children, (child, idx) => {
              return React.cloneElement(child, { item });
            })
          }
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
}