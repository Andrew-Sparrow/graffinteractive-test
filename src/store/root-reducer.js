import { combineReducers } from 'redux';
import { ships } from './ships/ships';

export const NameSpace = {
  SHIP: 'SHIP',
};

export default combineReducers({
  [NameSpace.SHIP]: ships,
});
