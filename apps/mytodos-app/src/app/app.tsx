import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Route, Link } from 'react-router-dom';
import LoginScreen from './screens/login-screen/LoginScreen';
import HomeScreen from './screens/home-screen/HomeScreen';

import './app.css';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Route path="/login" component={LoginScreen} />
        <Route exact path="/" component={HomeScreen} />
      </main>
      <Footer />
    </>
  );
}

export default App;
