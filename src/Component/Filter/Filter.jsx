import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  input: {
    padding: '5px',
    outline: 'none',
    '&:focus': {
      border: ['2px', 'solid', 'blue'],
      boxShadow: [
        'inset',
        '0px',
        '0px',
        '3px',
        '3px',
        'rgba(116, 113, 255, 0.34)',
      ],
    },
  },
});

const Filter = ({ value, onHandleChange }) => {
  const classes = useStyles();
  return (
    <div>
      <h3 className={classes.titel}>Find contacts by name</h3>
      <input
        className={classes.input}
        type="text"
        placeholder="Search contact"
        name="filter"
        value={value}
        onChange={onHandleChange}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
};
export default Filter;
