import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/App';

const Parametrs = {
  COUNT_CARDS: 5,
};

ReactDOM.render(
    <App
      countCards={Parametrs.COUNT_CARDS}
    />,
    document.querySelector(`#root`)
);
