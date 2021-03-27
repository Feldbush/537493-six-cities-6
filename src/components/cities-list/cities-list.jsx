import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

import {CityNames} from '../../constants';

const CitiesList = (props) => {
  const {
    currentCity,
    onCityChange
  } = props;

  const handleCityClick = (evt) => {
    evt.preventDefault();
    onCityChange(evt.currentTarget.innerText);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(CityNames).map((city) => {
          return (
            <li className="locations__item" key={city}>
              <a className={`locations__item-link tabs__item" href="#" ${city === currentCity && `tabs__item--active`}`} onClick={handleCityClick}>
                <span>{city}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
