import { IExperience } from '../components/main/components/experience/models/experience.model';
import { IProjects } from '../components/main/components/projects/models/projects.model';
import { ISummary } from '../components/main/components/summary/models/summary.model';
import { IContacts } from '../components/sidebar/components/contacts/models/contacts.model';
import { ICourses } from '../components/sidebar/components/courses/models/courses.model';
import { IEducation } from '../components/sidebar/components/education/models/education.model';
import { IInterests } from '../components/sidebar/components/interests/models/interests.model';
import { ILanguages } from '../components/sidebar/components/languages/models/languages.model';
import { IProfile } from '../components/sidebar/components/profile/models/profile.model';


export interface IOnlineCv {
  profileData: IProfile,
  contactsData: IContacts,
  educationData: IEducation,
  coursesData: ICourses,
  languagesData: ILanguages,
  interestsData: IInterests,
  summaryData: ISummary,
  experienceData: IExperience
  projectsData: IProjects
}