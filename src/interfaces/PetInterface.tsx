import { IUser } from './UserDataInterface';

export interface IPet {
  description: string;
  health: string;
  id: number;
  image: string;
  name: string;
  userId: number;
}

export interface IPetWithUser extends IPet {
  user: IUser;
}
