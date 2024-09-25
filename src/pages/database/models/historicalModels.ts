import {
  getLangIndex,
  getWord,
  type Translation
} from '@/pages/database/context/historicalContentLanguage'
import {
  type HistoricalEditItem,
  type HistoricalFormDTO,
  type HistoricalFormItem,
  type HistoricalInput,
  HistoricalLang,
  type HistoricalPerson,
  type HistoricalPersonBase
} from '@/pages/database/types/historicalTypes'
import { acceptStore } from '@/stores/acceptPerson'

export class HistoricalEditForm {
  items: HistoricalEditItem[]
  private block: HistoricalBlock

  constructor(items: HistoricalFormItem[], index: number, block: HistoricalBlock) {
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

  constructor(form: HistoricalFormDTO, ln: HistoricalLang, isStatic: boolean) {
    this.label = getWord(form.label, ln)
    const lnIndex = getLangIndex(ln)
    this.items = form.items.map((input) => {
      const accept = acceptStore()
      const text = accept.data ? accept.data[input.code as keyof HistoricalPersonBase] : ''

      const key = getWord(input.value as keyof Translation, ln)
      return {
        field: form.field,
        code: input.code,
        text: isStatic ? '' : text ? text[lnIndex] : '',
        placeholder: key,
        disabled: true
      }
    })
  }

  edit(index: number) {
    const item = this.items[index]
    item.disabled = !item.disabled
  }

  getData(result: any) {
    this.items.forEach((item) => {
      if (item.field) {
        if (!(item.field in result)) result[item.field] = {}
        result[item.field][item.code] = item.text
      } else {
        result[item.code] = item.text
      }
    })
    return result
  }
}

export class HistiricalColumn {
  items: HistoricalForm[]
  mainClass: string

  constructor(
    forms: HistoricalFormDTO[],
    ln: HistoricalLang,
    className: string,
    isStatic: boolean = false
  ) {
    this.items = forms.map((form) => new HistoricalForm(form, ln, isStatic))
    this.mainClass = className
  }

  edit(index: number[]) {
    this.items[index[0]].edit(index[1])
  }

  getData() {
    const result: any = {}
    this.items.forEach((item) => item.getData(result))
    return result
  }
}

export class HistoricalBlock {
  title: HistiricalColumn
  arContent: HistiricalColumn
  ruContent: HistiricalColumn
  enContent: HistiricalColumn
  editContent: HistoricalEditColumn
  constructor(forms: HistoricalFormDTO[]) {
    this.title = new HistiricalColumn(forms, HistoricalLang.RUSSIAN, 'column-title', true)
    this.arContent = new HistiricalColumn(forms, HistoricalLang.ARMENIAN, 'column-ar')
    this.ruContent = new HistiricalColumn(forms, HistoricalLang.RUSSIAN, 'column-ru')
    this.enContent = new HistiricalColumn(forms, HistoricalLang.ENGLISH, 'column-en')
    this.editContent = new HistoricalEditColumn(forms, this)
  }

  edit(index: number[]) {
    this.arContent.edit(index)
    this.ruContent.edit(index)
    this.enContent.edit(index)
  }

  getData() {
    return this.arContent.getData()
  }
}
