import { NameSpace } from '../root-reducer';

export const getShips = (state) => state[NameSpace.SHIPS].ships;
export const getIsDataLoaded = (state) => state[NameSpace.SHIPS].isDataLoaded;

