export
function createXmasTree(height: number, ornament: string): string {
  let tree = ''
  for (let i = 1; i <= height; i++) {
    const spaces = '_'.repeat(height - i)
    tree += `${spaces + ornament.repeat(i * 2 - 1) + spaces}\n`
  }
  const bottom = '_'.repeat(height - 1)
  tree += (`${bottom}#${bottom}\n`).repeat(2)
  return tree.slice(0, -1)
}
