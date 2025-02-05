export function getLongAmount(amount: number | string, leverage: number) {
  const result = (Number(amount) * leverage) / (leverage + 1);

  return Math.round(result * 100) / 100;
}
