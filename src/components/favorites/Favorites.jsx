import React from 'react';
import PropsTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {OfferType} from '../../types';
import FavoriteCard from '../FavoritesCard/FavoritesCard';

const Favorites = (props) => {
  const {offers} = props;
  let sortedOffers;

  const getSortedByCity = (offersData) => {
    const resultArray = [];

    offersData.map((offer) => {
      let currentCityIndex = resultArray.findIndex((item) => (item.city === offer.city.name));

      if (currentCityIndex !== -1) {
        resultArray[currentCityIndex].offers.push(offer);
      } else {
        resultArray.push({city: offer.city.name, offers: [offer]});
      }
    });

    return resultArray;
  };

  if (Array.isArray(offers) && offers.length > 0) {
    sortedOffers = getSortedByCity(offers);
  } else {
    sortedOffers = [];
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                sortedOffers.map(({city, offers: offersData}) => {
                  return (
                    <li className="favorites__locations-items" key={city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {offersData.map((offerData) => (<FavoriteCard offer={offerData} key={offerData.id}/>))}
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          </section>
          {
            Array.isArray(offers) && offers.length === 0 && <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          }
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  offers: PropsTypes.arrayOf(OfferType).isRequired
};

export default Favorites;
