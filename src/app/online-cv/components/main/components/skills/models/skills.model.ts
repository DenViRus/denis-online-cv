import { ISkillsItem } from './skills-item.model';

export interface ISkills {
  title: string;
  icon: string;
  items: ISkillsItem[];
  type: string;
}
