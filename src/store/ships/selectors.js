import { NameSpace } from '../root-reducer';

export const getShips = (state) => state[NameSpace.SHIPS].places;
