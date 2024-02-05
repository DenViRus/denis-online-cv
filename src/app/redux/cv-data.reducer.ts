import { createReducer, on } from '@ngrx/store';

import onlineCvDataEn from '../../assets/json/online-cv-data-en.json';
// import onlineCvDataRu from '../../assets/json/online-cv-data-ru.json';
import { LangToggler } from '../online-cv/components/lang-toggler/models/lang-toggler.model';
import { IOnlineCv } from '../online-cv/models/online-cv.model';
import { OnlineCvActions } from './cv-data.actions';

export const onlineCvStateFeatureKey = 'onlineCvState';

export interface OnlineCvState {
  langTogglerData: LangToggler;
  onlineCvData: IOnlineCv;
}

export const initialState: OnlineCvState = {
  langTogglerData: LangToggler.EN,
  onlineCvData: {
    profileData: onlineCvDataEn.profileData,
    contactsData: onlineCvDataEn.contactsData,
    educationData: onlineCvDataEn.educationData,
    coursesData: onlineCvDataEn.coursesData,
    languagesData: onlineCvDataEn.languagesData,
    interestsData: onlineCvDataEn.interestsData,
    summaryData: onlineCvDataEn.summaryData,
    experienceData: onlineCvDataEn.experienceData,
    projectsData: onlineCvDataEn.projectsData,
    skillsData: onlineCvDataEn.skillsData,
  },
};

export const OnlineCvReducer = createReducer(
  initialState,
  on(OnlineCvActions.loadLangTogglerData, (state, { langTogglerData }): OnlineCvState => ({
    ...state,
    langTogglerData: langTogglerData,
  })),
  on(OnlineCvActions.loadOnlineCvState, (state, { onlineCvState }): OnlineCvState => ({
    ...state,
    onlineCvData: onlineCvState,
  }))
);
