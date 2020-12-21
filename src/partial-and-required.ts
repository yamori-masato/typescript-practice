export {}

type Profile = {
  name: string
  age?: number
  zipCode: number
}

type PartialType = Partial<Profile> // 全てがオプション
type RequiredType = Required<Profile> // 全てが必須
