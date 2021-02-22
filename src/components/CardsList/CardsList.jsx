import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {OfferType} from '../../types';

const CardsList = (props) => {
  const {offers} = props;
  const [activeCard, setActiveCard] = useState(null);
  const cards = offers.map((offer, index) => {
    return (
      <Card
        offer={offer}
        handleMouseEnter={() => {
          if (activeCard !== offer.id) {
            setActiveCard(offer.id);
          }
        }}
        handleMouseLeave={() => {}}
        key={index + Math.random()}
      />
    );
  });

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards}
    </div>
  );
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired,
};

export default CardsList;
