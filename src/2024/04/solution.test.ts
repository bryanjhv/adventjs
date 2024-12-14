import { createXmasTree } from './solution.js'

describe('2024-04', () => {
  it('test #1', () => {
    expectTypeOf(
      createXmasTree,
    )
      .returns
      .toBeString()
  })

  it('test #2', () => {
    expect(
      createXmasTree(3, '*'),
    ).toBe(''
      + '__*__' + '\n'
      + '_***_' + '\n'
      + '*****' + '\n'
      + '__#__' + '\n'
      + '__#__',
    )
  })

  it('test #3', () => {
    expect(
      createXmasTree(5, '+'),
    ).toBe(''
      + '____+____' + '\n'
      + '___+++___' + '\n'
      + '__+++++__' + '\n'
      + '_+++++++_' + '\n'
      + '+++++++++' + '\n'
      + '____#____' + '\n'
      + '____#____',
    )
  })

  it('test #4', () => {
    expect(
      createXmasTree(6, '@'),
    ).toBe(''
      + '_____@_____' + '\n'
      + '____@@@____' + '\n'
      + '___@@@@@___' + '\n'
      + '__@@@@@@@__' + '\n'
      + '_@@@@@@@@@_' + '\n'
      + '@@@@@@@@@@@' + '\n'
      + '_____#_____' + '\n'
      + '_____#_____',
    )
  })

  it('test #5', () => {
    expect(
      createXmasTree(1, '*'),
    ).toBe(''
      + '*' + '\n'
      + '#' + '\n'
      + '#',
    )
  })

  it('test #6', () => {
    expect(
      createXmasTree(4, '#'),
    ).toBe(''
      + '___#___' + '\n'
      + '__###__' + '\n'
      + '_#####_' + '\n'
      + '#######' + '\n'
      + '___#___' + '\n'
      + '___#___',
    )
  })
})
