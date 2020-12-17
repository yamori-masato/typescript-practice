export {}

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce((accumulator, currentValue) => accumulator + currentValue)
}

console.log(sum(1, 2, 3, 4, 5))
