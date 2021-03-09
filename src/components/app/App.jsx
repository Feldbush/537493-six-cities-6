import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {OfferType, UserType, ReviewType} from '../../types';

import MainPage from '../Main/Main';
import SignIn from '../Sign In/Sign In';
import Favorites from '../Favorites/Favorites';
import Offer from '../Room/Room';
import Page404 from '../Page404/Page404';

const App = (props) => {
  const {offers, user, reviews, currentCity} = props;
  const isAuthorizated = true;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage offers={offers} user={user} isAuthorizated={isAuthorizated} currentCity={currentCity}/>
        </Route>
        <Route exact path='/login'>
          <SignIn/>
        </Route>
        <Route exact path='/favorites'>
          <Favorites offers={offers}/>
        </Route>
        <Route exact path='/offer/:id'>
          <Offer offer={offers[1]} reviews={reviews}/>
        </Route>
        <Route>
          <Page404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired,
  user: UserType.isRequired,
  reviews: PropTypes.arrayOf(ReviewType),
  currentCity: PropTypes.string.isRequired
};

export default App;
