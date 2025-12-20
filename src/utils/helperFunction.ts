export function formatAmount(amount) {
  if (!amount) {
    return 0;
  }
  let [integerPart, decimalPart] = amount.toString().split(".");
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
}
