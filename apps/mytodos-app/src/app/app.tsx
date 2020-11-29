import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Route, Link } from 'react-router-dom';
import LoginScreen from './screens/login-screen/LoginScreen';
import HomeScreen from './screens/home-screen/HomeScreen';

import './app.css';
import RegisterScreen from './screens/register-screen/RegisterScreen';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Route path="/login" component={LoginScreen} />
        <Route exact path="/" component={LoginScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/register" component={RegisterScreen} />
      </main>
      <Footer />
    </>
  );
}

export default App;
