import { ICoursesItem } from './courses-item.model';

export interface ICourses {
  title: string;
  type: string;
  items: ICoursesItem[];
}
