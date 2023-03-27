import { createReducer } from '@reduxjs/toolkit';

import {
  loadShips,
} from '../actions';

const initialState = {
  ships: [],
  isDataLoaded: false,
};

const ships = createReducer(initialState, (builder) => {
  builder
    .addCase(loadShips, (state, action) => {
      state.ships = action.payload;
      state.isDataLoaded = true;
    })
});

export { ships };
