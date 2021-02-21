import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import LoginRegisterPage from './pages/login-register/login-register.component';

import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
   constructor() {
      super();

      this.state = {
         currentUser: null,
      };
   }

   unsubscribeFromAuth = null;

   componentDidMount() {
      auth.onAuthStateChanged((user) => {
         this.setState({ currentUser: user });

         console.log(user);
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
               <Route exact path='/' component={HomePage} />
               <Route exact path='/shop' component={ShopPage} />
               <Route exact path='/login' component={LoginRegisterPage} />
            </Switch>
         </div>
      );
   }
}

export default App;
