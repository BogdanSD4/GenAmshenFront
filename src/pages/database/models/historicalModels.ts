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
  type HistoricalPersonBase,
  type ModerPersonInfo
} from '@/pages/database/types/historicalTypes'
import { acceptStore } from '@/stores/acceptPerson'

export class HistoricalEditForm {
  items: HistoricalEditItem[]
  private block: HistoricalBlock<ModerPersonInfo>

  constructor(items: HistoricalFormItem[], index: number, block: HistoricalBlock<ModerPersonInfo>) {
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

  constructor(forms: HistoricalFormDTO[], block: HistoricalBlock<ModerPersonInfo>) {
    this.items = forms.map((form, index) => {
      return new HistoricalEditForm(form.items, index, block)
    })
  }
}

export class HistoricalForm<T extends ModerPersonInfo> {
  label: string
  items: HistoricalInput[]

  constructor(form: HistoricalFormDTO, ln: HistoricalLang, isStatic: boolean) {
    this.label = getWord(form.label, ln)
    const lnIndex = getLangIndex(ln)

    this.items = form.items.map((input) => {
      const accept = acceptStore()
      const data = accept.data as T

      let text = []
      if (form.field) {
        const obj = data[form.field as keyof T] as HistoricalPersonBase
        text = obj[input.code as keyof HistoricalPersonBase] as string[]
      } else {
        text = data[input.code as keyof T] as string[]
      }
      let result: string | null = null

      if (text && typeof text[lnIndex] == 'string') {
        result = text[lnIndex].replace(/^:|:$/g, '')
      }

      const key = getWord(input.value as keyof Translation, ln)
      return {
        field: form.field,
        code: input.code,
        text: isStatic ? '' : (result ?? ''),
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

export class HistiricalColumn<T extends ModerPersonInfo> {
  items: HistoricalForm<T>[]
  mainClass: string

  constructor(
    forms: HistoricalFormDTO[],
    ln: HistoricalLang,
    className: string,
    isStatic: boolean = false
  ) {
    this.items = forms.map((form) => new HistoricalForm<T>(form, ln, isStatic))
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

export class HistoricalBlock<T extends ModerPersonInfo> {
  title: HistiricalColumn<T>
  arContent: HistiricalColumn<T>
  ruContent: HistiricalColumn<T>
  enContent: HistiricalColumn<T>
  editContent: HistoricalEditColumn
  constructor(forms: HistoricalFormDTO[]) {
    this.title = new HistiricalColumn(forms, HistoricalLang.RUSSIAN, 'column-title', true)
    this.arContent = new HistiricalColumn<T>(forms, HistoricalLang.ARMENIAN, 'column-ar')
    this.ruContent = new HistiricalColumn<T>(forms, HistoricalLang.RUSSIAN, 'column-ru')
    this.enContent = new HistiricalColumn<T>(forms, HistoricalLang.ENGLISH, 'column-en')
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
