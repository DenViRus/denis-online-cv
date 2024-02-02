import { createReducer } from '@ngrx/store';

import contactsData from '../../assets/json/contacts-data.json';
import coursesData  from '../../assets/json/courses-data.json';
import educationData from '../../assets/json/education-data.json';
import experienceData from '../../assets/json/experience-data.json';
import interestsData from '../../assets/json/interests-data.json';
import languagesData from '../../assets/json/languages-data.json';
import profileData from '../../assets/json/profile-data.json';
import summaryData from '../../assets/json/summary-data.json';
import { IOnlineCv } from '../online-cv/models/online-cv.model';



export const onlineCvDataFeatureKey = 'onlineCvData';

export interface OnlineCvState extends IOnlineCv {}

export const initialState: IOnlineCv = {
  profileData: profileData,
  contactsData: contactsData,
  educationData: educationData,
  coursesData: coursesData,
  languagesData: languagesData,
  interestsData: interestsData,
  summaryData: summaryData,
  experienceData: experienceData
};

export const OnlineCvReducer = createReducer(
  initialState,
);
