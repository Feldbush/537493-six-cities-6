import React from 'react';

import {ReviewType} from '../../types';
import dayjs from 'dayjs';
import {RATING_STAR_WIDTH} from '../../constants';

const ReviewsItem = (props) => {
  const {
    review: {
      id,
      user,
      name,
      rating,
      comment,
      date
    }
  } = props;

  return (
    <li className="reviews__item" key={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * RATING_STAR_WIDTH}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={`${dayjs(date).format(`YYYY-MM-DD`)}`}>{dayjs(date).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: ReviewType
};

export default ReviewsItem;
