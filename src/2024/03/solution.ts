type Inventory = Array<
  { name: string, quantity: number, category: string }
>

export
function organizeInventory(inventory: Inventory): object {
  const organized: Record<string, Record<string, number>> = {}
  for (const { name, quantity, category } of inventory) {
    organized[category] ??= {}
    organized[category][name] ??= 0
    organized[category][name] += quantity
  }
  return organized
}
