import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {getCityInfo} from '../../utils';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {OfferType} from '../../types';


const Map = (props) => {
  let {
    offers
  } = props;

  const mapRef = useRef();
  const city = getCityInfo(offers[0]);

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.lat,
        lng: city.lng
      },
      zoom: city.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(mapRef.current);

    offers.forEach((offer) => {
      const {
        location,
        title
      } = offer;

      const customIcon = leaflet.icon({
        iconUrl: `/img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker(
          {
            lat: location.latitude,
            lng: location.longitude
          },
          {
            icon: customIcon
          }
      )
      .addTo(mapRef.current)
      .bindPopup(title);
    });

    return () => {
      mapRef.current.remove();
    };
  });

  return (
    <div id="map" style={{height: `100%`}}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired,
};

export default Map;
