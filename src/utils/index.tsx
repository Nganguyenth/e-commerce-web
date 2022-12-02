export function deepMerge(current: any, updates: any) {
  for (const key in updates) {
    if (!current[key] || typeof updates[key] !== 'object') current[key] = updates[key]
    else deepMerge(current[key], updates[key])
  }
  return current
}

export function deepClone(obj: any) {
  //in case of primitives
  if (obj === null || typeof obj !== 'object') return obj

  //date objects should be
  if (obj instanceof Date) return new Date(obj.getTime())

  //handle Array
  if (Array.isArray(obj)) {
    const clonedArr: unknown[] = []
    obj.forEach(function (element) {
      clonedArr.push(deepClone(element))
    })
    return clonedArr
  }

  //lastly, handle objects
  const clonedObj = new obj.constructor()
  for (const prop in obj) {
    if (obj[prop]) {
      clonedObj[prop] = deepClone(obj[prop])
    }
  }
  return clonedObj
}
