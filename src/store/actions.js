import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_SHIPS: 'ships/loadShips',
  LOAD_LAUNCHES: 'launches/loadLaunches',
  REMOVE_LAUNCHES: 'launches/removeLaunches',
  SET_FILTERED_SHIPS: 'ships/setFilteredShips',
  SET_FILTERED_PORTS: 'ships/setFilteredPorts',
};

export const loadShips = createAction(
  ActionType.LOAD_SHIPS,
  (ships) => ({ payload: ships }),
);

export const setFilteredShips = createAction(
  ActionType.SET_FILTERED_SHIPS,
  (filteredShips) => ({ payload: filteredShips }),
);

export const setFilteredPorts = createAction(
  ActionType.SET_FILTERED_PORTS,
  (filteredShips) => ({ payload: filteredShips }),
);

export const loadLaunchNames = createAction(
  ActionType.LOAD_LAUNCHES,
  (launches) => ({ payload: launches }),
);

export const removeLaunches = createAction(ActionType.REMOVE_LAUNCHES);
