import { createReducer, on } from '@ngrx/store';

import { LangToggler } from '../online-cv/components/lang-toggler/models/lang-toggler.model';
import { IExperience } from '../online-cv/components/main/components/experience/models/experience.model';
import { IProjects } from '../online-cv/components/main/components/projects/models/projects.model';
import { ISkills } from '../online-cv/components/main/components/skills/models/skills.model';
import { ISummary } from '../online-cv/components/main/components/summary/models/summary.model';
import { IContacts } from '../online-cv/components/sidebar/components/contacts/models/contacts.model';
import { ICourses } from '../online-cv/components/sidebar/components/courses/models/courses.model';
import { IEducation } from '../online-cv/components/sidebar/components/education/models/education.model';
import { IInterests } from '../online-cv/components/sidebar/components/interests/models/interests.model';
import { ILanguages } from '../online-cv/components/sidebar/components/languages/models/languages.model';
import { IProfile } from '../online-cv/components/sidebar/components/profile/models/profile.model';
import { IOnlineCv } from '../online-cv/models/online-cv.model';
import { OnlineCvActions } from './cv-data.actions';

export const onlineCvStateFeatureKey = 'onlineCvState';

export interface OnlineCvState {
  langTogglerData: LangToggler;
  onlineCvData: IOnlineCv;
}

export const initialState: OnlineCvState = {
  langTogglerData: LangToggler.RU,
  onlineCvData: {
    profileData: {} as IProfile,
    contactsData: {} as IContacts,
    educationData: {} as IEducation,
    coursesData: {} as ICourses,
    languagesData: {} as ILanguages,
    interestsData: {} as IInterests,
    summaryData: {} as ISummary,
    experienceData: {} as IExperience,
    projectsData: {} as IProjects,
    skillsData: {} as ISkills,
  },
};

export const OnlineCvReducer = createReducer(
  initialState,
  on(
    OnlineCvActions.loadLangTogglerData,
    (state, { langTogglerData }): OnlineCvState => ({
      ...state,
      langTogglerData: langTogglerData,
    })
  ),
  on(
    OnlineCvActions.loadOnlineCvData,
    (state, { onlineCvData }): OnlineCvState => ({
      ...state,
      onlineCvData: onlineCvData,
    })
  )
);
