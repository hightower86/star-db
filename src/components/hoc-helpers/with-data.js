import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ErrorBounry from '../error-boundry';

const withData = (View, getData) => {
  return class extends Component {

    state = {
      data: null,
      hasError: false
    }
  
    componentDidMount() {
      getData()
      .then((data) => {
        this.setState({
          data: data,
        });
      });
    }

    componentDidCatch() {

      this.setState({
        hasError: true
      });
    }
  

    render() {

      const { data } = this.state;

      if (this.state.hasError) {
        return <ErrorIndicator />
      }
      
      if (!data) {
        return <Spinner />
      }

      return <View { ... this.props } data={data}/>;
    }

  };
};

export default withData;