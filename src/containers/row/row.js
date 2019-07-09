import React from 'react';
import PropType from 'prop-types';

import './row.css';

const Row = ({ left, right }) => {
  return (
    <div className="row mb2 people-page">
        <div className="col-md-6">
          {left}
        </div>
        <div className="col-md-6">
          {right}
        </div>
    </div>
  )
}

Row.propType = {
  left: PropType.node,
  right: PropType.node 
}

export default Row;