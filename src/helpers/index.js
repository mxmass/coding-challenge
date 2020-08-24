export const generateSetFromList = (arr, field) => [...new Set(arr.map(item => item[field]))].sort()
