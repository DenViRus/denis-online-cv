import { createFeatureSelector, createSelector } from '@ngrx/store';

import { onlineCvDataFeatureKey, OnlineCvState } from './cv-data.reducer';

export const selectOnlineCvState = createFeatureSelector<OnlineCvState>(
  onlineCvDataFeatureKey
);

export const selectProfileData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.profileData
);

export const selectContactData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.contactData
);

export const selectEducationData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.educationData
);

export const selectCoursesData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.coursesData
);
