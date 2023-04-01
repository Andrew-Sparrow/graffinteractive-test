import { combineReducers } from 'redux';
import { ships } from './ships/ships';

export const NameSpace = {
  SHIPS: 'SHIPS',
};

export default combineReducers({
  [NameSpace.SHIPS]: ships,
});
