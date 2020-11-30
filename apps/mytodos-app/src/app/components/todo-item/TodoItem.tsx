import {
  Button,
  Card,
  CardActions,
  CardContent,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { ITodoInfo } from '../../redux/interfaces/payloadTodo';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { green, orange, grey } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';

import './TodoItem.css';
import { AnyAction } from 'redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      color: 'white',
      '&:focus': {
        outline: 'none',
      },
      '&:hover': {
        color: 'white',
      },
    },
    Deletebtn: {
      '&:focus': {
        outline: 'none',
      },
    },
  })
);

/* eslint-disable-next-line */
export interface TodoItemProps {
  item: ITodoInfo;
  startClickHandler: any;
  completeClickHandler: any;
  deleteClickHandler: any;
}

export function TodoItem({
  item,
  startClickHandler,
  completeClickHandler,
  deleteClickHandler,
}: TodoItemProps) {
  const classes = useStyles();
  const [status, setStatus] = useState(item.status);

  const startHandler = () => {
    setStatus(1);
    item.status = 1;
    startClickHandler(item);
  };

  const completeHandler = () => {
    setStatus(2);
    item.status = 2;
    completeClickHandler(item);
  };

  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {item.todoName}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <FiberManualRecordIcon
                style={
                  status === 0
                    ? { color: green[500] }
                    : status === 1
                    ? { color: orange[500] }
                    : { color: grey[500] }
                }
              />
              <span>
                {' '}
                {status === 0
                  ? 'To do'
                  : status === 1
                  ? 'In progress'
                  : 'Completed'}
              </span>
            </Grid>
            <Grid item>
              {item.status === 0 && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => startHandler()}
                >
                  Start
                </Button>
              )}
              {status === 1 && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => completeHandler()}
                >
                  Complete
                </Button>
              )}
              <IconButton
                aria-label="delete"
                color="secondary"
                className={classes.Deletebtn}
                onClick={() => deleteClickHandler(item)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}

export default TodoItem;
