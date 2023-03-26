import { ICity } from './CityInterface';
import { IPet } from './PetInterface';
import { ILocation } from './LocationInterface';

export interface IUserData {
  user: IUser | {};
  pets: IPet[] | [];
  locationHistory: ILocation[] | [];
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  code: string;
  phone: string;
  address: string;
  cityId: number;
  city: ICity;
}
