import { combineReducers } from 'redux';
import { ships } from './ships/ships';
import { launches } from './launches/launches';

export const NameSpace = {
  SHIPS: 'SHIPS',
  LAUNCHES: 'LAUNCHES',
};

export default combineReducers({
  [NameSpace.SHIPS]: ships,
  [NameSpace.LAUNCHES]: launches,
});
