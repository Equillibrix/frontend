export function getShortAmount(amount: number | string, leverage: number) {
  const result = Number(amount) / (leverage + 1);

  return Math.round(result * 100) / 100;
}
