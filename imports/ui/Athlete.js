import React from 'react';
import PropTypes from 'prop-types';

// Task component - represents a single todo item
const Athlete = ({ athlete }) => (
  <li>{athlete.name}</li>
);

Athlete.propTypes = {
  athlete: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Athlete;
