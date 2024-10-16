export function isEmpty(data: any) {
  const keys = Object.keys(data)

  for (const key of keys) {
    const item = data[key]
    if (item) {
      if (typeof item === 'object') {
        if (!isEmpty(item)) return false
      } else if (item != '') {
        return false
      }
    }
  }
  return true
}
