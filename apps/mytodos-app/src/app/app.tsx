import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Route, Link } from 'react-router-dom';
import LoginScreen from './screens/login-screen/LoginScreen';

import './app.css';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Route exact path="/" component={LoginScreen} />
      </main>
      <Footer />
    </>
  );
}

export default App;
