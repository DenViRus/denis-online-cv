import { createFeatureSelector, createSelector } from '@ngrx/store';

import { onlineCvDataFeatureKey, OnlineCvState } from './cv-data.reducer';

export const selectOnlineCvState = createFeatureSelector<OnlineCvState>(
  onlineCvDataFeatureKey
);

export const selectProfileData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.profileData
);

export const selectContactsData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.contactsData
);

export const selectEducationData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.educationData
);

export const selectCoursesData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.coursesData
);

export const selectLanguagesData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.languagesData
);

export const selectInterestsData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.interestsData
);

export const selectSummaryData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.summaryData
);

export const selectExperienceData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.experienceData
);
