export function isEmpty(data: any) {
  const keys = Object.keys(data)

  for (const key of keys) {
    if (data[key] != '') {
      return false
    }
  }

  return true
}
