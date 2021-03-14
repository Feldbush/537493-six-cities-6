import React from 'react';
import PropTypes from 'prop-types';
import {ReviewType} from '../../types';
import ReviewsItem from '../ReviewsItem/ReviewsItem';

const ReviewsList = (props) => {
  const {
    reviews
  } = props;

  return (
    <>
      <ul className="reviews__list">
        {reviews.map((review) => (<ReviewsItem key={review.id} review={review}/>))}
      </ul>
    </>
  );

};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewType)
};

export default ReviewsList;
