import offers from '../mocks/offers';
import {ActionType} from './action';
import {CityNames, SortingTypes} from '../constants';

const initialState = {
  currentCity: CityNames.PARIS,
  currentSort: SortingTypes.POPULAR,
  offers
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };

    case ActionType.CHANGE_SORT:
      return {
        ...state,
        currentSort: action.payload
      };

    default:
      return state;
  }

};
