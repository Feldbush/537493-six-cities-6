export const getCityOffers = (offers, city) => {
  return offers.filter((offer) => (offer.city.name === city));
};

export const getCityInfo = (offer) => {
  const city = {
    lat: offer.city.location.latitude,
    lng: offer.city.location.longitude,
    zoom: offer.city.location.zoom
  };
  return city;
};
