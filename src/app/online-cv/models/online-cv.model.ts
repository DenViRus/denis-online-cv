import { IContactItem } from '../components/sidebar/components/contact/models/contact-item.model';
import { ICourses } from '../components/sidebar/components/courses/models/courses.model';
import { IEducation } from '../components/sidebar/components/education/models/education.model';
import { IProfile } from '../components/sidebar/components/profile/models/profile.model';


export interface IOnlineCv {
  profileData: IProfile,
  contactData: IContactItem[],
  educationData: IEducation,
  coursesData: ICourses
}