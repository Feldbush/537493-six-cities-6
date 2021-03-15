import React from 'react';
import PropTypes from 'prop-types';
import CardsList from '../CardsList/CardsList';
import {OfferType} from '../../types';


const NearPlacesList = (props) => {
  const {offers} = props;
  return (
    <CardsList
      offers={offers}
      className="near-places__list"
      cardClassName="near-places__card"
    />
  );
};

NearPlacesList.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired
};

export default NearPlacesList;
