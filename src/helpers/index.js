export const generateSetFromList = (arr, setField) =>
  [...new Set(arr.map(m => m[setField]))].filter(i => i !== null).sort();
