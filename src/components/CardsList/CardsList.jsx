import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {OfferType} from '../../types';

const CardsList = (props) => {
  const {
    offers,
    className,
    cardClassName
  } = props;
  const [activeCard, setActiveCard] = useState(null);
  const cards = offers.map((offer) => {
    return (
      <Card
        offer={offer}
        handleMouseEnter={() => {
          if (activeCard !== offer.id) {
            setActiveCard(offer.id);
          }
        }}
        handleMouseLeave={() => {}}
        className={cardClassName}
        key={offer.id}
      />
    );
  });

  return (
    <div className={`${className} places__list`}>
      {cards}
    </div>
  );
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired,
  className: PropTypes.string,
  cardClassName: PropTypes.string
};

export default CardsList;
