export class Inventory {
  constructor(private storage: Map<Date, string[]> = new Map()) {}

  add(date: Date, product: string) {
    const products = this.storage.get(date) || []
    this.storage.set(date, [...products, product])
  }

  project(date: Date) {
    return this.storage.get(date)
  }
}
