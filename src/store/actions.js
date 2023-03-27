import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_SHIPS: 'ships/loadShips',
};

export const loadShips = createAction(
  ActionType.LOAD_SHIPS,
  (ships) => ({ payload: ships }),
);
