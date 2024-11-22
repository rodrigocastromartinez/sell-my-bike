function differenceInYears(date1: Date, date2: Date): number {
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  return year2 - year1;
}

export function calculateResaleValue(
  price: number,
  purchaseDate: string
): number {
  const _purchaseDate = new Date(purchaseDate);
  const yearsElapsed = differenceInYears(_purchaseDate, new Date());
  let resaleValue = price;

  for (let i = 0; i < yearsElapsed; i++) {
    resaleValue /= 2;
  }

  return resaleValue;
}
