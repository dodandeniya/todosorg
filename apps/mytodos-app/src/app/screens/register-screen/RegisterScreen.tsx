import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../redux/actions/userActions';
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
import './RegisterScreen.css';

/* eslint-disable-next-line */
export interface RegisterScreenProps {
  history: any;
  location: any;
}

export const RegisterScreen = (props: RegisterScreenProps) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [isButtonDisabled, setButtonDisable] = useState(false);

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const dispatch = useDispatch();
  const userRegister = useSelector((state: RootState) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, userInfo, redirect]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(register(firstName, lastName, email, password));
  };

  const onfocusoutHandler = () => {
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      setButtonDisable(true);
      return;
    }

    setMessage(null);
    setButtonDisable(false);
  };

  return (
    <CenterComponent height="80vh">
      <Card>
        <Typography
          style={{ textAlign: 'center', marginBottom: 20, marginTop: 20 }}
          component="h1"
          variant="h5"
        >
          Sign Up
        </Typography>
        {error && (
          <Container>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          </Container>
        )}
        {message && (
          <Container>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {message}
            </Alert>
          </Container>
        )}
        {loading && <Loader height="5vh" />}
        <form onSubmit={submitHandler} className="m-3">
          <FormGroup id="firstName" className="py-1 px-3">
            <TextField
              id="firstName"
              required
              placeholder="First Name"
              label="First Name"
              color="primary"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormGroup>

          <FormGroup id="lastName" className="py-1 px-3">
            <TextField
              id="lastName"
              required
              placeholder="Last Name"
              label="Last Name"
              color="primary"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormGroup>

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

          <FormGroup id="confirmPassword" className="py-1 px-3">
            <TextField
              id="confirmPassword"
              required
              placeholder="Confirm Password"
              label="Confirm Password"
              color="primary"
              type="password"
              onBlur={onfocusoutHandler}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormGroup>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isButtonDisabled}
            className={`${classes.button} btn-block`}
          >
            Register
          </Button>
        </form>
      </Card>
      Have an Account?{' '}
      <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
        Login
      </Link>
    </CenterComponent>
  );
};

export default RegisterScreen;
