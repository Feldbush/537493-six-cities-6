export const getCityOffers = (offers, city) => {
  const resultArray = offers.filter((offer) => {
    return offer.city.name.toLowerCase() === city.toLowerCase();
  });
  return resultArray;
};

export const getCityInfo = (offer) => {
  const city = {
    lat: offer.city.location.latitude,
    lng: offer.city.location.longitude,
    zoom: offer.city.location.zoom
  };
  return city;
};
