import React from 'react';
import PropTypes from 'prop-types';

import {OfferType} from '../../types';
import {RATING_STAR_WIDTH} from '../../constants';
import {useHistory} from 'react-router-dom';

const Card = (props) => {
  const {
    handleMouseEnter,
    handleMouseLeave,
    offer: {
      previewImage,
      title,
      type,
      rating,
      price,
      isPremium,
      isFavorite,
    },
    className
  } = props;

  const history = useHistory();

  return (
    <article onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${className} place-card`}>
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={`img/${previewImage}`} width="260" height="200"
            alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && `place-card__bookmark-button--active`} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * RATING_STAR_WIDTH}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a onClick={() => {
            history.push(`/offer/1`);
          }}>
            {title}
          </a>
        </h2>
        <p className="place-card__type">{type && (type.charAt(0).toUpperCase() + type.slice(1))}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  offer: OfferType,
  className: PropTypes.string
};

export default Card;
