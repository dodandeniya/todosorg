import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CenterComponent } from '../../components/center-component/CenterComponent';
import { Loader } from '../../components/loader/Loader';
import {
  FormGroup,
  Card,
  Typography,
  TextField,
  Button,
  makeStyles,
  Theme,
  Grid,
  createStyles,
  Container,
} from '@material-ui/core';
import { RootState } from '../../redux/reducers';
import { Alert, AlertTitle } from '@material-ui/lab';

import './CreateTodoScreen.css';
import { CreateTodoItem } from '../../redux/actions/todosActions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginTop: '20px',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      '&:focus': {
        outline: 'none',
      },
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
  })
);

/* eslint-disable-next-line */
export interface CreateTodoScreenProps {
  history: any;
}

export function CreateTodoScreen(props: CreateTodoScreenProps) {
  const classes = useStyles();
  const [todoName, setTodoName] = useState('');
  const todosList = useSelector((state: RootState) => state.todosList);
  const { loading, error } = todosList;
  const dispatch = useDispatch();

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(CreateTodoItem(todoName));
    props.history.push('/home');
  };

  return (
    <CenterComponent height="80vh">
      <Card>
        <Typography
          style={{ textAlign: 'center', marginBottom: 20, marginTop: 20 }}
          component="h1"
          variant="h5"
        >
          Create Todo Item
        </Typography>
        {error && (
          <Container>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          </Container>
        )}
        {loading && <Loader height="5vh" />}
        <form onSubmit={submitHandler} className="m-3">
          <FormGroup id="todoItem" className="py-1 px-3">
            <TextField
              id="todoItem"
              required
              placeholder="Todo Name"
              label="Todo Name"
              color="primary"
              type="text"
              value={todoName}
              onChange={(e) => setTodoName(e.target.value)}
            />
          </FormGroup>

          <Button type="submit" className={`${classes.button} btn-block`}>
            Create
          </Button>
        </form>
      </Card>
    </CenterComponent>
  );
}

export default CreateTodoScreen;
