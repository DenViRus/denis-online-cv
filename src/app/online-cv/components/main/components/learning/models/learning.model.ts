import { ILearningItem } from './learning-item.model';

export interface ILearning {
  title: string;
  type: string;
  items: ILearningItem[];
}
