import {getSum} from "../get-sum";
import {logMessage} from "../log-message";

/**
 * Log the sum of an array of numbers to the console.
 * @param numbers The array of numbers whose sum should be logged to the console.
 */
export const logSum = (...numbers: number[]): void => {
  const sum = getSum(...numbers);

  logMessage(sum);
};
