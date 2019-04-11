import { get } from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function whoami() {
  return (dispatch) => {
    return get('api/whoami')
      .then(response => {
        console.log(response);
        dispatch({
          type: types.WHOAMI_SUCCESS
        });
      })
      .catch(error => {
        localStorage.removeItem('token');
        dispatch({
          type: types.AUTHENTICATE_FAIL,
          error: error
        });
      })
  }
}
