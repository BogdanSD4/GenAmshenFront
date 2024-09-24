import {
  AdressModel,
  BaseDateModel,
  BasePersonModel
} from '@/pages/person/components/data/models/base'

export class MarriagePersonModel {
  info: BasePersonModel = new BasePersonModel()
  wedding_number: string = ''
  adress: AdressModel = new AdressModel()
}

export class BrideModel extends MarriagePersonModel {
  father: BasePersonModel = new BasePersonModel()
}

export class MarriageDateModel extends BaseDateModel {
  adress: AdressModel = new AdressModel()
}

export class WitnessModel {
  first_witness_info: BasePersonModel = new BasePersonModel()
  first_witness_adress: AdressModel = new AdressModel()
  second_witness_info: BasePersonModel = new BasePersonModel()
  second_witness_adress: AdressModel = new AdressModel()
}
