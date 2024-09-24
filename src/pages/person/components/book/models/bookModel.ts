import {
  AdressModel,
  BaseDateModel,
  BasePersonModel
} from '@/pages/person/components/data/models/base'

export class BookModel {
  archive: string = ''
  fund: string = ''
  description: string = ''
  adress: AdressModel = new AdressModel()
  book_number: string = ''
  book_slide: string = ''
  book_page: string = ''
  book_note: string = ''
  book_image: File | null = null
  priest: BasePersonModel = new BasePersonModel()
  priest_birth_date: BaseDateModel = new BaseDateModel()
  priest_birth_adress: AdressModel = new AdressModel()
  priest_baptism_date: BaseDateModel = new BaseDateModel()
  priest_baptism_adress: AdressModel = new AdressModel()
}
