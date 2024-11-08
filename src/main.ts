export class Inventory {
  constructor(private storage: Map<Date, string[]> = new Map()) {}

  add(date: Date, product: string) {
    const products = this.storage.get(date) || []
    this.storage.set(date, [...products, product])
  }

  project(date: Date) {
    const inventory = [...this.storage.entries()].sort(([a], [b]) => a.getTime() - b.getTime())
    const inventoryFlated = inventory.reduce<string[]>((acc: any, [d, products]) => {
      date >= d && acc.push(...products)
      return acc
    }, [])

    let elementWithoutTilde = ""
    inventoryFlated.forEach((element, index) => {
      if (element.includes("~")) {
        elementWithoutTilde = element.replace("~", "")
        inventoryFlated.splice(index, 1)
      }
    })
    if (elementWithoutTilde !== "") {
      inventoryFlated.splice(
        inventoryFlated.findIndex((e) => e === elementWithoutTilde),
        1,
      )
    }

    return inventoryFlated
  }

  remove(date: Date, product: string) {
    const products = this.storage.get(date) || []
    this.storage.set(date, [...products, `~${product}`])
  }
}
