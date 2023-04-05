import { createReducer } from '@reduxjs/toolkit';

import {
  loadLaunchNames,
  removeLaunches
} from '../actions';

const initialState = {
  launches: [],
  isDataLoading: true,
};

const launches = createReducer(initialState, (builder) => {
  builder
    .addCase(loadLaunchNames, (state, action) => {
      state.launches = action.payload;
      state.isDataLoading = false;
    })
    .addCase(removeLaunches, (state) => {
      state.launches = [];
      state.isDataLoading = true;
    });
});

export { launches };
