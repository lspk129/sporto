import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { red500 } from 'material-ui/styles/colors';
import { Athletes } from '../api/athletes';

const DeleteIcon = styled(DeleteForever)`
  cursor: pointer;
`;

const Athlete = ({
  athlete: {
    _id,
    firstName,
    lastName,
    birthDate,
    gender,
    sport,
    couch,
  },
}) => {
  const handleSubmit = () => Athletes.remove(_id);

  return (
    <TableRow>
      <TableRowColumn>{firstName} {lastName}</TableRowColumn>
      <TableRowColumn>{birthDate}</TableRowColumn>
      <TableRowColumn>{gender}</TableRowColumn>
      <TableRowColumn>{sport}</TableRowColumn>
      <TableRowColumn>{couch}</TableRowColumn>
      <TableRowColumn><DeleteIcon color={red500} onClick={handleSubmit} /></TableRowColumn>
    </TableRow>
  );
};

Athlete.propTypes = {
  athlete: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    sport: PropTypes.string.isRequired,
    couch: PropTypes.string.isRequired,
  }).isRequired,
};

export default Athlete;
