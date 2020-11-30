import {
  Container,
  Typography,
  Grid,
  FormGroup,
  TextField,
  Button,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import Loader from '../../components/loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';

import './SearchScreen.css';
import { ITodoInfo } from '../../redux/interfaces/payloadTodo';
import TodoItem from '../../components/todo-item/TodoItem';
import {
  removeTodoItem,
  resetSearchList,
  searchTodosList,
  updateTodoItem,
} from '../../redux/actions/todosActions';

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
export interface SearchScreenProps {}

export function SearchScreen(props: SearchScreenProps) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState('');
  const { loading, error, todos } = useSelector(
    (state: RootState) => state.searchItems
  );

  useEffect(() => {
    if (todoName === '') dispatch(resetSearchList());
  });

  const updateStatusHandler = (item: ITodoInfo) => {
    dispatch(updateTodoItem(item));
  };

  const deleteHandler = (item: ITodoInfo) => {
    dispatch(removeTodoItem(item.id));
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(searchTodosList(todoName.trim()));
  };

  return (
    <div>
      <Container>
        <Typography className="m-3" component="h1" variant="h5">
          Search Item
        </Typography>
        <form onSubmit={submitHandler} className="m-3">
          <FormGroup id="todoItem" className="py-1 px-3">
            <TextField
              id="todoItem"
              required
              placeholder="Search"
              label="Todo Name"
              color="primary"
              type="text"
              value={todoName}
              onChange={(e) => setTodoName(e.target.value)}
            />
          </FormGroup>

          <Button type="submit" className={`${classes.button} btn-block`}>
            Search
          </Button>
        </form>
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

export default SearchScreen;
