import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/actions/userActions';
import './LoginScreen.css';
import { CenterComponent } from '../../components/center-component/CenterComponent';
import { Loader } from '../../components/loader/Loader';
import {
  FormGroup,
  Card,
  Typography,
  TextField,
  Button,
  Container,
} from '@material-ui/core';
import { RootState } from '../../redux/reducers';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useStyles } from '../../styles/style';

/* eslint-disable-next-line */
export interface LoginScreenProps {
  history: any;
  location: any;
}

export const LoginScreen = (props: LoginScreenProps) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/home';

  const dispatch = useDispatch();
  const userLogin = useSelector((state: RootState) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, userInfo, redirect]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <CenterComponent height="80vh">
      <Card>
        <Typography
          style={{ textAlign: 'center', marginBottom: 20, marginTop: 20 }}
          component="h1"
          variant="h5"
        >
          Sign In
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
          <FormGroup id="email" className="py-1 px-3">
            <TextField
              id="email"
              required
              placeholder="E-mail"
              label="E-mail"
              color="primary"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup id="password" className="py-1 px-3">
            <TextField
              id="password"
              required
              placeholder="Password"
              label="Password"
              color="primary"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={`${classes.button} btn-block`}
          >
            Sign In
          </Button>
        </form>
      </Card>
      New Customer?{' '}
      <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
        Register
      </Link>
    </CenterComponent>
  );
};

export default LoginScreen;
