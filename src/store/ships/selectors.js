import { NameSpace } from '../root-reducer';

export const getShips = (state) => state[NameSpace.SHIPS].ships;
export const getFilteredShips = (state) => state[NameSpace.SHIPS].filteredShips;
export const getIsShipsLoading = (state) => state[NameSpace.SHIPS].isDataLoading;
