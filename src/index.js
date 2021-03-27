import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';

import App from './components/App/App';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import user from './mocks/user';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
        user={user}
        currentCity={`Amsterdam`}
      />
    </Provider>,
    document.querySelector(`#root`)
);
