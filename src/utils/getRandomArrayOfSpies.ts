import { getRandomIntFromInterval } from "./getRandomIntFromInterval";

export function getRandomArrayOfSpies(playersNumber: number): boolean[] {
  const result: boolean[] = [];
  result.length = playersNumber;
  result.fill(false);
  const spyIndex = getRandomIntFromInterval(0, playersNumber);
  result[spyIndex] = true;
  return result;
}
