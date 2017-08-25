import React from 'react';
import PropTypes from 'prop-types';

import { Athletes } from '../api/athletes';

// Task component - represents a single todo item
const Athlete = ({ athlete }) => {
  const handleSubmit = () => Athletes.remove(athlete._id);

  return (
    <li>
      {athlete.name}
      <button onClick={handleSubmit}>Delete</button>
    </li>
  );
};

Athlete.propTypes = {
  athlete: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Athlete;
