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

    expect(inventory.project(yesterday)).toEqual(["apple"])
  })

  it("should add apple and banana", () => {
    const inventory = new Inventory()
    inventory.add(yesterday, "apple")
    inventory.add(yesterday, "banana")

    expect(inventory.project(yesterday)).toEqual(["apple", "banana"])
  })

  it("should add apple and banana for yesterday and orange for today", () => {
    const inventory = new Inventory()
    inventory.add(yesterday, "apple")
    inventory.add(yesterday, "banana")
    inventory.add(today, "orange")

    expect(inventory.project(yesterday)).toEqual(["apple", "banana"])
    expect(inventory.project(today)).toEqual(["apple", "banana", "orange"])
  })
})
