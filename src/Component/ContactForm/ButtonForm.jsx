import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    cursor: 'pointer',
    margin: {
      right: 'auto',
      left: 'auto',
      top: '20px',
      bottom: '20px',
    },
    display: 'block',
    padding: '5px',
    width: '140px',
    backgroundColor: 'transparent',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: ' rgba(116, 113, 255, 0.34)',
    },
  },
});

const ButtonForm = () => {
  const classes = useStyles();
  return (
    <button className={classes.button} type="submit">
      Add contact
    </button>
  );
};

export default ButtonForm;
