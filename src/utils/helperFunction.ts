export function formatAmount(amount: number | string): string {
  if (amount === null || amount === undefined || amount === "") {
    return "0";
  }

  const [integerPart, decimalPart] = amount.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}
