export type NavItem = {
  id: number;
  title: string;
  url: string;
  subItems?: NavItem[];
};
