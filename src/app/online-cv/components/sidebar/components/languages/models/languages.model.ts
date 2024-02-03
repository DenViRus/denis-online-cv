import { ILanguagesItem } from './languages-item.model';

export interface ILanguages {
  type: string;
  title: string;
  items: ILanguagesItem[];
}
