import { combineReducers } from 'redux';

import itemListReducer from './itemListReducer';
import userReducer from './userReducer';

export default (state = {}, action) => {
  return combineReducers({
    itemListReducer,
    userReducer
  })(state, action)
}
