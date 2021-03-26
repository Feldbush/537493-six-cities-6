import React from 'react';
import PropTypes from 'prop-types';
import {getCityOffers} from '../../utils';
import {connect} from 'react-redux';

import Map from '../Map/Map';
import CitiesPlacesList from '../CitiesPlacesList/CitiesPlacesList';
import CitiesList from '../CitiesList/CitiesList';
import MainEmpty from '../main-empty/main-empty';

import {OfferType, UserType} from '../../types';

const MainPage = (props) => {
  const {
    offers,
    user: {
      email,
    },
    isAuthorizated,
    currentCity
  } = props;

  let filtredOffers = [];

  if (offers.length) {
    filtredOffers = getCityOffers(offers, currentCity);
  }

  return (
    <>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {
                    isAuthorizated ?
                      <li className="header__nav-item user">
                        <a className="header__nav-link header__nav-link--profile" href="#">
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__user-name user__name">{email}</span>
                        </a>
                      </li>
                      :
                      <li className="header__nav-item user">
                        <a className="header__nav-link header__nav-link--profile" href="#">
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__login">Sign in</span>
                        </a>
                      </li>
                  }
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className={`page__main page__main--index ${filtredOffers.length !== `0` && `page__main--index-empty`}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <CitiesList />
          </div>
          <div className="cities">
            {!filtredOffers.length ? <MainEmpty/> :
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{filtredOffers.length} places to stay in {`${currentCity}`}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex="0">
                      Popular
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select"></use>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li className="places__option places__option--active" tabIndex="0">Popular</li>
                      <li className="places__option" tabIndex="0">Price: low to high</li>
                      <li className="places__option" tabIndex="0">Price: high to low</li>
                      <li className="places__option" tabIndex="0">Top rated first</li>
                    </ul>
                  </form>
                  <CitiesPlacesList offers={filtredOffers} />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map offers={filtredOffers} />
                  </section>
                </div>
              </div>
            }
          </div>
        </main>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
});

MainPage.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired,
  user: UserType.isRequired,
  isAuthorizated: PropTypes.bool.isRequired,
  currentCity: PropTypes.string.isRequired
};

export {MainPage};
export default connect(mapStateToProps)(MainPage);
