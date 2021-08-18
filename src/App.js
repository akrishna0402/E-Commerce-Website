import React from 'react';
import { Route , Switch } from 'react-router';
import Header from './Components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signIn" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
