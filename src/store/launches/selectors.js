import { NameSpace } from '../root-reducer';

export const getLaunches = (state) => state[NameSpace.LAUNCHES].launches;
export const getIsLaunchesLoading = (state) => state[NameSpace.LAUNCHES].isDataLoading;
