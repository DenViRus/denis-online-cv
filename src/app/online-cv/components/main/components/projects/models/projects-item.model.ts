interface IProjectDetails {
  title: string;
  desc: string;
  link: string;
}

export interface IProjectsItem {
  title: string;
  type: string;
  icon: string;
  items: IProjectDetails[];
}
