export
function inBox(box: string[]): boolean {
  const row = box.findIndex(row => row.includes('*'))
  const col = box[row]?.indexOf('*') ?? -1
  const where = [
    box[row - 1]?.[col], // up
    box[row]?.[col + 1], // right
    box[row + 1]?.[col], // down
    box[row]?.[col - 1], // left
  ]
  return where.every(pos => pos)
}
