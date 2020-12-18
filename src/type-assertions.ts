export {}

let name: any = 'Ham'

let length1 = (name as string).length
let length2 = (<string>name).length

// length = 'foo'
