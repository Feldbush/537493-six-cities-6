export const getCityOffers = (offers, city) => {
  const resulArray = offers.filter((offer) => {
    return offer.city.name.toLowerCase() === city.toLowerCase();
  });
  return resulArray;
};

export const getCityInfo = (offer) => {
  const city = {
    lat: offer.city.location.latitude,
    lng: offer.city.location.longitude,
    zoom: offer.city.location.zoom
  };
  return city;
};
