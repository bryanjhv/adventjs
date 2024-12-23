interface Shoe {
  type: 'I' | 'R'
  size: number
}

export
function organizeShoes(shoes: Shoe[]): number[] {
  const count: Record<number, Record<Shoe['type'], number>> = {}
  for (const { type, size } of shoes) {
    count[size] ??= { I: 0, R: 0 }
    count[size][type]++
  }
  const pairs: number[] = []
  for (const size in count) {
    const { I, R } = count[size]!
    let many = Math.min(I, R)
    while (many--) pairs.push(+size)
  }
  return pairs
}
