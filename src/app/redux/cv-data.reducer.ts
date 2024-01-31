import { createReducer } from '@ngrx/store';

import contactData from '../../assets/json/contact-data.json';
import coursesData  from '../../assets/json/courses-data.json';
import educationData from '../../assets/json/education-data.json';
import profileData from '../../assets/json/profile-data.json';
import { IOnlineCv } from '../online-cv/models/online-cv.model';



export const onlineCvDataFeatureKey = 'onlineCvData';

export interface OnlineCvState extends IOnlineCv {}

export const initialState: IOnlineCv = {
  profileData: profileData,
  contactData: contactData,
  educationData: educationData,
  coursesData: coursesData
};

export const OnlineCvReducer = createReducer(
  initialState,
);
