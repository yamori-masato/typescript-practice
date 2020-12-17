export {}

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}
// 単一継承しかできない

// TSでも単一継承はできないが、実装を強制することはできる

interface Kenja {
  ionazun(): void
}

interface Senshi {
  kougeki(): void
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun')
  }

  kougeki(): void {
    console.log('kougeki')
  }
}

const jiro = new Jiro()
jiro.ionazun()
jiro.kougeki()
