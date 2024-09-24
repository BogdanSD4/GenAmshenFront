import { getWord, type Translation } from '@/pages/database/context/historicalContentLanguage'
import {
  type HistoricalEditItem,
  type HistoricalFormDTO,
  type HistoricalInput,
  HistoricalLang
} from '@/pages/database/types/historicalTypes'

export class HistoricalEditForm {
  items: HistoricalEditItem[]
  private block: HistoricalBlock

  constructor(items: string[], index: number, block: HistoricalBlock) {
    this.block = block
    this.items = items.map((item, i) => {
      return {
        index: [index, i],
        value: false
      }
    })
  }

  edit(index: number[]) {
    this.block.edit(index)
  }
}
export class HistoricalEditColumn {
  items: HistoricalEditForm[]

  constructor(forms: HistoricalFormDTO[], block: HistoricalBlock) {
    this.items = forms.map((form, index) => {
      return new HistoricalEditForm(form.items, index, block)
    })
  }
}

export class HistoricalForm {
  label: string
  items: HistoricalInput[]

  constructor(form: HistoricalFormDTO, ln: HistoricalLang) {
    this.label = getWord(form.label, ln)
    this.items = form.items.map((input) => {
      const key = getWord(input as keyof Translation, ln)
      return {
        text: '',
        placeholder: key,
        disabled: true
      }
    })
  }

  edit(index: number) {
    const item = this.items[index]
    item.disabled = !item.disabled
  }
}

export class HistiricalColumn {
  items: HistoricalForm[]
  mainClass: string

  constructor(forms: HistoricalFormDTO[], ln: HistoricalLang, className: string) {
    this.items = forms.map((form) => new HistoricalForm(form, ln))
    this.mainClass = className
  }

  edit(index: number[]) {
    this.items[index[0]].edit(index[1])
  }
}

export class HistoricalBlock {
  title: HistiricalColumn
  arContent: HistiricalColumn
  ruContent: HistiricalColumn
  enContent: HistiricalColumn
  editContent: HistoricalEditColumn
  constructor(forms: HistoricalFormDTO[]) {
    this.title = new HistiricalColumn(forms, HistoricalLang.RUSSIAN, 'column-title')
    this.arContent = new HistiricalColumn(forms, HistoricalLang.ARMENIAN, 'column-ar')
    this.ruContent = new HistiricalColumn(forms, HistoricalLang.RUSSIAN, 'column-ru')
    this.enContent = new HistiricalColumn(forms, HistoricalLang.ENGLISH, 'column-en')
    this.editContent = new HistoricalEditColumn(forms, this)
  }

  edit(index: number[]) {
    console.log(index)
    this.arContent.edit(index)
    this.ruContent.edit(index)
    this.enContent.edit(index)
  }
}
