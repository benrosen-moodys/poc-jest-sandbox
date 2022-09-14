/**
 * Get the sum of an array of numbers.
 * @param numbers The numbers to sum.
 */
export const getSum = (...numbers: number[]): number => {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
};
