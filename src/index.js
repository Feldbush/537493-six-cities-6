import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import user from './mocks/user';

ReactDOM.render(
    <App
      offers={offers}
      reviews={reviews}
      user={user}
    />,
    document.querySelector(`#root`)
);
