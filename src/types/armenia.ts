import { ImageType } from ".";

export interface EventType {
  id: number;
  createdAt: string;
  updatedAt: string;
  isRu: boolean;
  isHy: boolean;
  name: string;
  name_ru: string;
  name_hy: string;
  thumbnail: string;
  lat: number;
  lng: number;
  shortDescription: string;
  shortDescription_ru: string;
  shortDescription_hy: string;
  description: string;
  description_ru: string;
  description_hy: string;
  type: string;
  type_ru: string;
  type_hy: string;
  address: string;
  address_ru: string;
  address_hy: string;
  date: string;
  neatestSettlement: string;
  neatestSettlement_ru: string;
  neatestSettlement_hy: string;
  language: string;
  language_ru: string;
  language_hy: string;
  entrance: string;
  entrance_ru: string;
  entrance_hy: string;
  images: ImageType[];
}