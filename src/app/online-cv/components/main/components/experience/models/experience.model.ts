import { IExperienceItem } from './experience-item.model';

export interface IExperience {
  title: string;
  icon: string;
  items: IExperienceItem[];
  type: string;
}
