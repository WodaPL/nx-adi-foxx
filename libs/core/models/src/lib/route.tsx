import { StaticImageData } from 'next/image';

export interface Route {
  id: string;
  label: string;
  url: string;
  img?: StaticImageData;
}
