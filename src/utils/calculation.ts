export const calculatePricePerUnit = (unitNumber: string, price: string): string => {
  const amount = parseInt(unitNumber);

  if (amount === 0) {
    return '0';
  }

  if (amount === 1) {
    return price;
  } 
  
  const currency = parseFloat(price);
  const pricePerUnit = ((currency * 100 / amount) / 100).toFixed(3);

  return pricePerUnit.substring(0, pricePerUnit.length - 1);
}