export type Gif = {
  id: string;
  title: string;
  media_formats: {
    gif: {
      url: string;
      duration: number;
      preview: string;
      dims: [number, number];
      size: number;
    };
  };
  created: number;
  content_description: string;
  itemurl: string;
  url: string;
  tags: string[];
  flags: any[];
  hasaudio: boolean;
};
