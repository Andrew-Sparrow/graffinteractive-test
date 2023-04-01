import {
  loadPlaces,
} from './actions';

import {APIRoute} from '../const';
import Util from '../util/util';

export const fetchPlacesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const adaptedPlacesToClient = Util.adaptPlacesToClient(data);
      dispatch(loadPlaces(adaptedPlacesToClient));
    })
    .catch((err) => {})
);


