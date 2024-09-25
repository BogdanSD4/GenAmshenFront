import { HistoricalLang } from '@/pages/database/types/historicalTypes'
import { Exception } from 'sass'

export function getLangIndex(lang: HistoricalLang) {
  switch (lang) {
    case HistoricalLang.ARMENIAN:
      return 0
    case HistoricalLang.RUSSIAN:
      return 1
    case HistoricalLang.ENGLISH:
      return 2
    default:
      throw new Error('Invalid language')
  }
}

export function getWord(key: keyof Translation, lang: HistoricalLang): string {
  const lnIndex = getLangIndex(lang)
  return language[key][lnIndex]
}

const language: Translation = {
  firstName: ['Անուն', 'Имя', 'First name'],
  lastName: ['Ազգանուն', 'Фамилия', 'Last name'],
  patronymic: ['Հայրանուն', 'Отчество', 'Patronymic'],
  gender: ['Սեռը', 'Пол', 'Gender'],
  date: ['Օրը Ամիսը Տարին', 'День Месяц Год', 'DD MM YYYY'],
  age: ['Տարիքը', 'Возраст', 'Age'],
  note: ['Ծանոթագրություն', 'Примечание', 'Note'],
  marriageNumber: ['Պսակի №', 'Номер брака', 'Marriage Number'],
  country: ['Երկիրը', 'Страна', 'Country'],
  region: ['Մարզը', 'Область/Регион', 'Region'],
  city: ['Քաղաք/գյուղ', 'Город/деревня', 'City/Village'],
  street: ['Փողոց', 'Улица', 'Street'],
  building: ['Շենք', 'Здание', 'Building'],
  postalCode: ['Ինդեքս', 'Почтовый индекс', 'Postal Code'],
  weddingDate: ['Օրը Ամիսը Տարին', 'Дата свадьбы', 'Wedding Date'],
  comments: ['Մեկնաբանություններ', 'Комментарии', 'Comments'],
  baptism: ['Մկրտություն', 'Крещение', 'Baptism'],
  baptismPlace: ['Ծննդյան վայրը', 'Место крещения', 'Place of baptism'],
  birthDate: ['Ծննդյան տարեթիվը', 'Дата рождения', 'Birthday'],
  name: ['Անուն', 'Имя', 'Name'],
  birthPlace: ['Ծննդյան վայրը', 'Место рождения', 'Place of birth'],
  witnessNote: ['Ծանոթագրություն/քահանա', 'Примечания/Священник', 'Note/Priest'],
  father: ['Հայր', 'Отец', 'Father'],
  mother: ['Մայր', 'Мать', 'Mother'],
  godfather: ['Կնքահայր', 'Крестный', 'Godfather'],
  groom: ['Փեսա', 'Жених', 'Groom'],
  adress: ['Բնակության հասցեն', 'Адрес проживания', 'Residential address'],
  bride: ['Հարս', 'Невеста', 'Bride'],
  brideFather: ['Հարսի հայրը', 'Отец невесты', 'Father of the bride'],
  witness: ['Վկա/Երաշխավոր', 'Свидетель/Поручитель', 'Witness'],
  witness_2: ['Վկա/Երաշխավոր 2', 'Свидетель/Поручитель 2', 'Witness 2'],
  deathDate: ['Մահվան տարեթիվը', 'Дата смерти', 'Death date'],
  burialDate: ['Թաղման ամսաթիվը', 'Дата захоронения', 'Burial date'],
  burialPlace: ['Թաղման վայրը', 'Место захоронения', 'Burial place'],
  archive: ['Արխիվ', 'Архив', 'Archive'],
  archiveName: ['Արխիվի անվանումը', 'Название архива', 'Archive name'],
  fund: ['Ֆոնդ', 'Фонд', 'Fund name'],
  description: ['Ցուցակ', 'Опись', 'Register name'],
  archiveLocation: ['Արխիվի գտնվելու վայրը', 'Место нахождения архива', 'Archive location'],
  book: ['Գիրք', 'Книга', 'Book'],
  bookNumber: ['Գրքի համարը/Գործ', 'Номер книги/дело', 'Book number'],
  slideNumber: ['Ալայդի համարը', 'Номер слайда', 'Slide number'],
  pageNumber: ['Էջի համարը', 'Номер страницы', 'Page number'],
  priest: ['քահանա', 'Священник', 'Priest']
}

export interface Translation {
  name: string[]
  firstName: string[]
  lastName: string[]
  patronymic: string[]
  gender: string[]
  date: string[]
  birthDate: string[]
  age: string[]
  note: string[]
  marriageNumber: string[]
  country: string[]
  region: string[]
  city: string[]
  street: string[]
  building: string[]
  postalCode: string[]
  weddingDate: string[]
  comments: string[]
  baptism: string[]
  baptismPlace: string[]
  birthPlace: string[]
  witnessNote: string[]
  father: string[]
  mother: string[]
  godfather: string[]
  groom: string[]
  adress: string[]
  bride: string[]
  brideFather: string[]
  witness: string[]
  witness_2: string[]
  deathDate: string[]
  burialDate: string[]
  burialPlace: string[]
  archive: string[]
  archiveName: string[]
  fund: string[]
  description: string[]
  archiveLocation: string[]
  book: string[]
  bookNumber: string[]
  slideNumber: string[]
  pageNumber: string[]
  priest: string[]
}
