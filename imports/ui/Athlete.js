import React from 'react';
import PropTypes from 'prop-types';

import { Athletes } from '../api/athletes';

const Athlete = ({ athlete: { _id, firstName, lastName, birthDate, checked } }) => {
  const handleSubmit = () => Athletes.remove(_id);

  const toggleCheck = () =>
    Athletes.update(_id, { $set: { checked: !checked } });

  return (
    <li>
      {firstName} {lastName} {birthDate}
      <button onClick={handleSubmit}>Delete</button>
      <input
        type={'checkbox'}
        checked={checked}
        onClick={toggleCheck}
      />
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
