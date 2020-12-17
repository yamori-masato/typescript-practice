export {}

function double(value: number): number
function double(value: string): string

function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2
  }
  switch (typeof value) {
    case 'number':
      return value * 2
    case 'string':
      return value + value
    // default:
    //   throw 'numberでもstringでも無いので、引数の型を確認してください。'
  }
}

console.log(double(100))
console.log(double('Go '))
// console.log(double(true))
