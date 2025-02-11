export interface ImageGridItem {
  title: string;
  link: string;
  image: string;
  alt?: string;
  hiddenTitle?: boolean;
  target?: string | "_blank" | "_self" | "_top" | "_parent";
}
