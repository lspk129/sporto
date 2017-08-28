import React from 'react';
import PropTypes from 'prop-types';
import Athlete from './Athlete';
import CreateAthlete from './CreateAthlete';

const App = (props) => {
  const renderAthletes = () => props.athletes.map(athlete => (
    <Athlete key={athlete._id} athlete={athlete} />
  ));
  return (
    <div>
      <header>
        <h2>Sporto centro DB</h2>
      </header>

      <CreateAthlete />

      <ul>
        {renderAthletes()}
      </ul>
    </div>
  );
};

App.propTypes = {
  athletes: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
