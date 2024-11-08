import { describe, it, expect } from "vitest"
import { Inventory } from "./main.js"

describe("Default test", () => {
  const yesterday = new Date("2024-11-14")
  const today = new Date("2024-11-15")
  const tomorrow = new Date("2024-11-16")
  const future = new Date("2025-01-01")
  it("should add apple", () => {
    const inventory = new Inventory()
    inventory.add(yesterday, "apple")
    expect(inventory.project(yesterday)).toBe(["apple"])
  })
})
