import { IContactsItem } from './contacts-item.model';

export interface IContacts {
  title: string;
  type: string;
  items: IContactsItem[];
}
