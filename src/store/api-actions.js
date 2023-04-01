import {
  loadShips,
} from './actions';

import { APIRoute } from '../const';

export const fetchShipsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.SHIPS)
    .then(({ data }) => {
      dispatch(loadShips(data));
    })
    .catch((err) => {})
);
