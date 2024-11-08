export class Inventory {
  constructor(private storage: Map<Date, string[]> = new Map()) {}

  add(date: Date, product: string) {
    throw new Error("Not implemented")
  }

  project(date: Date) {
    throw new Error("Not implemented")
  }
}

const yesterday = new Date("2024-11-14")
const today = new Date("2024-11-15")
const tomorrow = new Date("2024-11-16")
const future = new Date("2025-01-01")
