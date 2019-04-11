import { get } from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function getItemList() {
  return (dispatch) => {
    return get('mockapi/getItemList.json')
      .then(response => {
        dispatch({
          type: types.GET_ITEM_LIST_SUCCESS,
          itemList: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: types.GET_ITEM_LIST_ERROR,
          error: error
        });
      })
  }
}
