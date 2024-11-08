export class Inventory {
  constructor(private storage: Map<Date, string[]> = new Map()) {}

  add(date: Date, product: string) {
    const products = this.storage.get(date) || []
    this.storage.set(date, [...products, product])
  }

  project(date: Date) {
    const inventory = [...this.storage.entries()].sort(([a], [b]) => a.getTime() - b.getTime())
    const result = inventory.reduce((acc: any, [d, products]) => {
      date >= d && acc.push(...products)
      return acc
    }, [])
    return result
  }

  remove(date, product: string) {
    return
  }
}
