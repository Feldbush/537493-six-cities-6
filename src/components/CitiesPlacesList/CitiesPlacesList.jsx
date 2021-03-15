import React from 'react';
import PropTypes from 'prop-types';
import CardsList from '../CardsList/CardsList';
import {OfferType} from '../../types';


const CitiesPlacesList = (props) => {
  const {offers} = props;
  return (
    <CardsList
      offers={offers}
      className="cities__places-list tabs__content"
      cardClassName="cities__place-card"
    />
  );
};

CitiesPlacesList.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired
};

export default CitiesPlacesList;
