import { ICity } from './CityInterface';
import { IPet } from './PetInterface';

export interface ILocation {
  id: number;
  createdDate: string;
  location: string;
  address: string;
  city: ICity;
  cityId: number;
  contact: IContact;
  contactId: 3;
  pet: IPet;
  petId: number;
}

export interface IContact {
  id: number;
  code: string;
  phone: string;
  message: string;
}
