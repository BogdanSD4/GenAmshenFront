export function deleteStyle(name: string) {
  const link = document.querySelectorAll('link')
  link.forEach((s) => {
    if (s.href.includes(name)) {
      document.head.removeChild(s)
    }
  })
}

export function addStyle(name: string) {
  const links = document.querySelectorAll('link')
  const arr = Array.from(links)

  if (arr.some((l) => l.href.includes(name))) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `/src/assets/styles/${name}`
  document.head.appendChild(link)
}

//Свернуть
//Назви колонок
//Профілів у опретора може бути не один(багато)
//Модальні вікна

//пендігн не приходит
