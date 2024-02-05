import { createFeatureSelector, createSelector } from '@ngrx/store';

import { OnlineCvState, onlineCvStateFeatureKey } from './cv-data.reducer';

export const selectOnlineCvState = createFeatureSelector<OnlineCvState>(
  onlineCvStateFeatureKey
);

export const selectLangTogglerData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.langTogglerData
);

export const selectProfileData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.onlineCvData.profileData
);

export const selectContactsData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.onlineCvData.contactsData
);

export const selectEducationData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.onlineCvData.educationData
);

export const selectCoursesData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.onlineCvData.coursesData
);

export const selectLanguagesData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.onlineCvData.languagesData
);

export const selectInterestsData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.onlineCvData.interestsData
);

export const selectSummaryData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.onlineCvData.summaryData
);

export const selectExperienceData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.onlineCvData.experienceData
);

export const selectProjectsData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.onlineCvData.projectsData
);

export const selectSkillsData = createSelector(
  selectOnlineCvState,
  (state: OnlineCvState) => state.onlineCvData.skillsData
);
