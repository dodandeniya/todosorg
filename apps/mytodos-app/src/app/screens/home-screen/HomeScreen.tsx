import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { Alert, AlertTitle } from '@material-ui/lab';

import './HomeScreen.css';

/* eslint-disable-next-line */
export interface HomeScreenProps {
  history: any;
  location: any;
}

export function HomeScreen(props: HomeScreenProps) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state: RootState) => state.userLogin);

  useEffect(() => {
    if (!userLogin.userInfo) {
      props.history.push('/login');
    }
  }, [dispatch, props.history, userLogin]);

  return (
    <div>
      <h1>Welcome to HomeScreen!</h1>
    </div>
  );
}

export default HomeScreen;
