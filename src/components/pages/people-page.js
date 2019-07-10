import React from 'react';
import { withRouter } from 'react-router-dom';
import { PersonList, PersonDetails } from '../sw-components';
import Row from '../../containers/row';
import './pages.css';

const PeoplePage = ({ history, match }) => {

    const { id } =  match.params ;
    const itemList = (
      <PersonList onItemSelected={(id) => history.push(id)}/>
    );

    const personDetails = (
      <PersonDetails itemId={id}/>
     );

    return (
      <div>
        <Row left={itemList} right={personDetails}/>
      </div>
    );
};

export default withRouter(PeoplePage);
