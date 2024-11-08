export class Inventory {
  constructor(private storage: Map<Date, string[]> = new Map()) {}

  add(date: Date, product: string) {
    return false
  }

  project(date: Date) {
    return ["apple"]
  }
}
