import React from 'react';
import PropTypes from 'prop-types';

import MainPage from '../main/MainPage';

const App = (props) => {
  const {countCards} = props;

  return (
    <MainPage countCards={countCards}/>
  );
};

App.propTypes = {
  countCards: PropTypes.number.isRequired,
};

export default App;
