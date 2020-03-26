export const isTextValidNumber = (text: string): boolean => {
  return /^\d+$/.test(text);
}

export const isTextValidPrice = (text: string): boolean => {
  if (text.match(/[^0-9.]/)) {
    return false;
  }

  if (/^\d+$/.test(text)) {
    return true;
  }

  return /^\d+\.\d{0,2}$/.test(text);
}