import { IInterestsItem } from './interests-item.model';


export interface IInterests {
  type: string,
  title: string;
  items: IInterestsItem[];
}
