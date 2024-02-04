import { IProjectsItem } from './projects-item.model';


export interface IProjects {
  title: string;
  icon: string;
  items: IProjectsItem[];
  type: string;
}
