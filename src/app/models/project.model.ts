export interface Project {
  title: string;
  imagePath: string;
  shortDescription: string;
  links?: { name: string, title: string, href: string }[];
  images?: { url: string, title?: string }[];
  tech?: string[],
};
