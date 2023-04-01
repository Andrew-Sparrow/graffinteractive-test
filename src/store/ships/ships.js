import { createReducer } from '@reduxjs/toolkit';

import {
  loadShips, setFilteredShips,
} from '../actions';

const initialState = {
  ships: [],
  filteredShips: [],
  isDataLoaded: false,
};

const ships = createReducer(initialState, (builder) => {
  builder
    .addCase(loadShips, (state, action) => {
      state.ships = action.payload;
      state.filteredShips = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setFilteredShips, (state, action) => {
      state.filteredShips = action.payload;
    })
});

export { ships };
