import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';

import itemListReducer from './itemListReducer';

export default (state = {}, action) => {
  return combineReducers({
    itemListReducer,
    i18n: i18nReducer
  })(state, action)
}
