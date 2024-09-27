export function deleteLink(name: string[]) {
  const link = document.querySelectorAll('link')
  link.forEach((s) => {
    if (name.some((n) => s.href.includes(n))) {
      document.head.removeChild(s)
    }
  })
}

export function deleteStyle(name: string[]) {
  const style = document.querySelectorAll('style')
  style.forEach((s) => {
    const atr = s.getAttribute('data-vite-dev-id')
    if (atr && name.some((n) => atr.includes(n))) {
      document.head.removeChild(s)
    }
  })
}

export function addLink(name: string) {
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
