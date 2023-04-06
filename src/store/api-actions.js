import {
  loadLaunchNames,
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

export const fetchLaunchesList = (launchIDs) => (dispatch, _getState, api) => {
  const requests = launchIDs.map((launchId) => api.get(`${ APIRoute.LAUNCHES }/${ launchId }`));

  Promise.all(requests)
    .then((values) => {
      const launchNames = values.map((items) => items.data.name);
      dispatch(loadLaunchNames(launchNames));
    });
};
