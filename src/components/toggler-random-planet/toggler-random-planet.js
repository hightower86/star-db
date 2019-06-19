import React from 'react';

import './toggler-random-planet.css';

const TogglerRandomPlanet = ({ onToggleRandomPlanet }) => {
  return (
    <div className="container toggler">
      <div className="btn btn-outline-warning"
           onClick={()=>onToggleRandomPlanet()}
      >Toggle random Planet</div>
    </div>
  )
}

export default TogglerRandomPlanet;