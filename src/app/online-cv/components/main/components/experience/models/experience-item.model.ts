interface IExperienceDetails {
  title: string;
  items: string[];
}

export interface IExperienceItem {
  title: string;
  time: string;
  company: string;
  responsibilities: IExperienceDetails;
  achievements: IExperienceDetails;
}
