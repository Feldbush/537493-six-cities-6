import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from '../main/MainPage';
import SignIn from '../signIn/SignIn';
import Favorites from '../favorites/Favorites';
import Offer from '../offer/Offer';
import Page404 from '../page404/Page404';

const App = (props) => {
  const {countCards} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage countCards={countCards}/>
        </Route>
        <Route exact path='/login'>
          <SignIn/>
        </Route>
        <Route exact path='/favorites'>
          <Favorites/>
        </Route>
        <Route exact path='/offer/:id'>
          <Offer/>
        </Route>
        <Route>
          <Page404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  countCards: PropTypes.number.isRequired,
};

export default App;
