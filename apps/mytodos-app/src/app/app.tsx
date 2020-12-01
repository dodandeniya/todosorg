import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Route } from 'react-router-dom';
import LoginScreen from './screens/login-screen/LoginScreen';
import HomeScreen from './screens/home-screen/HomeScreen';

import './app.css';
import RegisterScreen from './screens/register-screen/RegisterScreen';
import CreateTodoScreen from './screens/create-todo-screen/CreateTodoScreen';
import SearchScreen from './screens/search-screen/SearchScreen';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Route path="/login" component={LoginScreen} />
        <Route exact path="/" component={LoginScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/addTodo" component={CreateTodoScreen} />
        <Route path="/searchItem" component={SearchScreen} />
      </main>
      <Footer />
    </>
  );
}

export default App;
