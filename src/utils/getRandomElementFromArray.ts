import { getRandomIntFromInterval } from "./getRandomIntFromInterval";

export function getRandomElementFromArray<T>(array: T[]): T {
  return array[getRandomIntFromInterval(0, array.length)];
}
