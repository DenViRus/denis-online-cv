import { createReducer } from '@ngrx/store';

import profileData from '../../assets/json/profile-data.json';
import { IOnlineCv } from '../online-cv/models/online-cv.model';



export const onlineCvDataFeatureKey = 'onlineCvData';

export interface OnlineCvState extends IOnlineCv {}

export const initialState: IOnlineCv = {
  profileData: profileData,
};

export const OnlineCvReducer = createReducer(
  initialState,
);
