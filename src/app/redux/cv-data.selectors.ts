import { createFeatureSelector, createSelector } from '@ngrx/store';

import { onlineCvDataFeatureKey, OnlineCvState } from './cv-data.reducer';

export const selectOnlineCvState = createFeatureSelector<OnlineCvState>(
  onlineCvDataFeatureKey
);

export const selectProfileData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.profileData
);
