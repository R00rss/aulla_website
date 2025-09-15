export type SocialNetWorkItem = {
  id: number;
  title: string;
  url: string;
  logo: {
    src: ((_props: astroHTML.JSX.SVGAttributes) => any) & ImageMetadata;
    height: number;
    width: number;
  };
};
