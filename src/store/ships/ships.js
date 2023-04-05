import { createReducer } from '@reduxjs/toolkit';

import {
  loadShips, setFilteredShips,
} from '../actions';

const initialState = {
  ships: [],
  filteredShips: [],
  isDataLoading: true,
};

const ships = createReducer(initialState, (builder) => {
  builder
    .addCase(loadShips, (state, action) => {
      state.ships = action.payload;
      state.filteredShips = action.payload;
      state.isDataLoading = false;
    })
    .addCase(setFilteredShips, (state, action) => {
      state.filteredShips = action.payload;
    })
});

export { ships };
