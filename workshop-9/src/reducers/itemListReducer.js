import * as types from '../actions/itemList/actionTypes';

const initialState = {
  itemList: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ITEM_LIST_SUCCESS: {
      return {
        ...state,
        itemList: action.itemList,
        error: null
      }
    }
    case types.GET_ITEM_LIST_ERROR: {
      return {
        ...state,
        error: action.error
      }
    }
    default: {
      return state;
    }
  }
}
