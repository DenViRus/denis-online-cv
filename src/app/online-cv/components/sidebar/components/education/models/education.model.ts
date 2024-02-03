import { IEducationItem } from './education-item.model';

export interface IEducation {
  title: string;
  type: string;
  items: IEducationItem[];
}
