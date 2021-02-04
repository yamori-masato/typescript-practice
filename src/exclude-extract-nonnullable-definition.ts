export {}

type MyExclude<T, U> = T extends U ? never : T
type DebugType = () => void
type SomeTypes = string | number | DebugType
type FunctionType = Exclude<SomeTypes, string | number>
type MyFunctionType = MyExclude<SomeTypes, string | number>

type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>

type NullableTypes = string | number | null | undefined
type NonNullableTypes = NonNullable<NullableTypes>
