import { combineReducers } from 'redux';

import itemListReducer from './itemListReducer';

export default (state = {}, action) => {
  return combineReducers({
    itemListReducer
  })(state, action)
}
