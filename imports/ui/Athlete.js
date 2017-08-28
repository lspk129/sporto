import React from 'react';
import PropTypes from 'prop-types';

import { Athletes } from '../api/athletes';

const Athlete = ({
  athlete: {
    _id,
    firstName,
    lastName,
    birthDate,
    gender,
    sport,
  },
}) => {
  const handleSubmit = () => Athletes.remove(_id);

  return (
    <li>
      {firstName} {lastName}, {birthDate}, {gender}, {sport}
      <button onClick={handleSubmit}>Delete</button>
    </li>
  );
};

Athlete.propTypes = {
  athlete: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Athlete;
