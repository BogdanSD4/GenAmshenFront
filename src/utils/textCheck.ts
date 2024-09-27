const armenianRegex = /^[\u0530-\u058F0-9]+$/
const armenianReplace = /[^\u0530-\u058F0-9]/g

const englishRegex = /^[a-zA-Z0-9]+$/
const englishReplace = /[^a-zA-Z0-9]/g

const russianRegex = /[^а-яА-ЯёЁ0-9]/g

export function isArmenianLanguage(value: string) {
  return armenianRegex.test(value)
}

export function checkSymbolArmenian(event: KeyboardEvent) {
  onKeydown(event, armenianRegex)
}

function isSomeLang(event: Event, lang: RegExp, rep: RegExp) {
  const target = event.target as HTMLInputElement
  const value = target.value
  console.log(target)

  if (!lang.test(value)) {
    target.value = value.slice(0, -1)
  }
}

function onKeydown(event: KeyboardEvent, lang: RegExp) {
  const key = event.key

  if (
    key === 'Backspace' ||
    key === 'Delete' ||
    key === 'Tab' ||
    key === 'Escape' ||
    key === 'Enter'
  ) {
    return
  }

  if (!lang.test(key)) {
    event.preventDefault()
  }
}
