export function chunk(items: any[], size = 1) {
  let current = 0
  let acc: any[] = []
  const result: any[] = []

  items.forEach((item) => {
    if (current >= size) {
      result.push(acc)
      current = 1
      acc = [item]
    } else {
      acc.push(item)
      ++current
    }
  })

  if (acc.length) {
    result.push(acc)
  }

  return result
}
