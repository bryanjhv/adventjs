export
function createFrame(names: string[]): string {
  let frame = ''
  const max = Math.max(...names.map(name => name.length))
  const top = '*'.repeat(max + 4)
  frame += `${top}\n`
  for (const name of names)
    frame += `* ${name.padEnd(max, ' ')} *\n`
  frame += `${top}`
  return frame
}
