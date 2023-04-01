import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_SHIPS: 'ships/loadShips',
  SET_FILTERED_SHIPS: 'ships/setFilteredShips',
};

export const loadShips = createAction(
  ActionType.LOAD_SHIPS,
  (ships) => ({ payload: ships }),
);

export const setFilteredShips = createAction(
  ActionType.SET_FILTERED_SHIPS,
  (filteredShips) => ({ payload: filteredShips }),
);
