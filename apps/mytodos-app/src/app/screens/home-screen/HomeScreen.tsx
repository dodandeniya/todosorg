import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { Alert, AlertTitle } from '@material-ui/lab';
import {
  getTodosList,
  removeTodoItem,
  updateTodoItem,
} from '../../redux/actions/todosActions';

import './HomeScreen.css';
import { Typography, Container, Grid } from '@material-ui/core';
import { ITodoInfo } from '../../redux/interfaces/payloadTodo';
import TodoItem from '../../components/todo-item/TodoItem';
import Loader from '../../components/loader/Loader';

/* eslint-disable-next-line */
export interface HomeScreenProps {
  history: any;
  location: any;
}

export function HomeScreen(props: HomeScreenProps) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state: RootState) => state.userLogin);
  const { loading, error, todos } = useSelector(
    (state: RootState) => state.todosList
  );

  useEffect(() => {
    if (!userLogin.userInfo) {
      props.history.push('/login');
      return;
    }

    dispatch(getTodosList());
  }, [dispatch, props.history, userLogin]);

  const updateStatusHandler = (item: ITodoInfo) => {
    dispatch(updateTodoItem(item));
  };

  const deleteHandler = (item: ITodoInfo) => {
    dispatch(removeTodoItem(item.id));
  };

  return (
    <div>
      <Container>
        <Typography className="m-3" component="h1" variant="h5">
          Available Todos
        </Typography>
        {loading && <Loader height="50vh" />}
        {error && (
          <Container>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          </Container>
        )}
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          {todos.map((item: ITodoInfo) => (
            <Grid key={item.id} item xs={12} sm={12} md={4} lg={4}>
              <TodoItem
                item={item}
                startClickHandler={updateStatusHandler}
                completeClickHandler={updateStatusHandler}
                deleteClickHandler={deleteHandler}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default HomeScreen;
