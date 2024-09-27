export class BasePersonModel {
  first_name: string = ''
  last_name: string = ''
  patronymic: string = ''
  age: string = ''
  name_note: string = ''
}

export class AdressModel {
  country: string = ''
  region: string = ''
  city: string = ''
  street: string = ''
  building: string = ''
  postal: string = ''
  place_note: string = ''
}

export class BaseDateModel {
  date: string = ''
  date_note: string = ''
}
