import { car } from "./car";

const totalVerdict = (car: {
  rating: [string, number][];
}): number => {
  const sumRating: number = car.rating.reduce((acc: number, item: [string, number]) => {
    console.log(acc, item);

    return item[1] + acc;
  }, 0);
  const verdict: number = sumRating / car.rating.length;
  return verdict;
};

export const carResult = totalVerdict(car);