export interface ICity {
  id: number;
  name: string;
  stateId: number;
  state: IState;
}

export interface IState {
  id: number;
  name: string;
  countryId: number;
  country: ICountry;
}

export interface ICountry {
  id: number;
  name: string;
  phone: number;
  code: string;
}
