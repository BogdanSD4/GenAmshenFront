import {
  AdressModel,
  BaseDateModel,
  BasePersonModel
} from '@/pages/person/components/data/models/base'

export class BaseBirthModel {
  info: BasePersonModel = new BasePersonModel()
  date: BaseDateModel = new BaseDateModel()
  gender: string = ''
  birth_adress: AdressModel = new AdressModel()
  baptism_date: BaseDateModel = new BaseDateModel()
  baptism_adress: AdressModel = new AdressModel()

  label: string
  moreClass: string
  isGenderField: boolean = false
  haveMoreInfo: boolean = false
  constructor(
    label: string,
    moreClass: string,
    moreInfo: boolean = false,
    isGender: boolean = false
  ) {
    this.label = label
    this.moreClass = moreClass
    this.haveMoreInfo = moreInfo
    this.isGenderField = isGender
  }
}
