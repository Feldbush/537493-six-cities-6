import PropTypes from 'prop-types';

export const LocationType = PropTypes.shape({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
});

export const CityType = PropTypes.shape({
  location: LocationType.isRequired,
  name: PropTypes.string.isRequired
});

export const HostType = PropTypes.shape({
  avatarUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isPro: PropTypes.bool,
  name: PropTypes.string.isRequired
});

export const OfferType = PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  city: CityType.isRequired,
  description: PropTypes.string.string,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: HostType.isRequired,
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  location: LocationType.isRequired,
  maxAdults: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
});

export const ReviewType = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: HostType.isRequired
});

export const UserType = PropTypes.shape({
  avatarUrl: PropTypes.string,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isPro: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
});

// export const ReviewsType = PropTypes.shape({
//   comment: PropTypes.string,
//   date: PropTypes.string,
//   id: PropTypes.string,
//   rating: PropTypes.number,
//   user: PropTypes.shape({
//     avatarUrl: PropTypes.string,
//     id: PropTypes.string,
//     isPro: PropTypes.bool,
//     name: PropTypes.string
//   })
// });
