import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuIconButton: {
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      color: 'inherit',
    },
  },
  title: {
    '&:hover': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },

  spaceSection: {
    flexGrow: 1,
  },

  button: {
    marginTop: '20px',
    color: 'white',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      color: 'white',
    },
  },

  todoButton: {
    color: 'white',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      color: 'white',
    },
  },

  deletebtn: {
    '&:focus': {
      outline: 'none',
    },
  },
});
