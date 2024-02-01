import { ISummaryItem } from './summary-item.model';

export interface ISummary {
  title: string;
  icon: string;
  items: ISummaryItem[];
  type: string;
}
