import { createFrame } from './solution.js'

describe('2024-02', () => {
  it('test #1', () => {
    expectTypeOf(
      createFrame,
    )
      .returns
      .toBeString()
  })

  it('test #2', () => {
    expect(
      createFrame(['midu']),
    ).toBe(''
      + '********' + '\n'
      + '* midu *' + '\n'
      + '********',
    )
  })

  it('test #3', () => {
    expect(
      createFrame(['midu', 'madeval', 'educalvolpz']),
    ).toBe(''
      + '***************' + '\n'
      + '* midu        *' + '\n'
      + '* madeval     *' + '\n'
      + '* educalvolpz *' + '\n'
      + '***************',
    )
  })

  it('test #4', () => {
    expect(
      createFrame(['a', 'bb', 'ccc']),
    ).toBe(''
      + '*******' + '\n'
      + '* a   *' + '\n'
      + '* bb  *' + '\n'
      + '* ccc *' + '\n'
      + '*******',
    )
  })

  it('test #5', () => {
    expect(
      createFrame(['a', 'bb', 'ccc', 'dddd']),
    ).toBe(''
      + '********' + '\n'
      + '* a    *' + '\n'
      + '* bb   *' + '\n'
      + '* ccc  *' + '\n'
      + '* dddd *' + '\n'
      + '********',
    )
  })

  it('test #6', () => {
    expect(
      createFrame(['midu', 'madeval', 'educalvolpz', 'midu']),
    ).toBe(''
      + '***************' + '\n'
      + '* midu        *' + '\n'
      + '* madeval     *' + '\n'
      + '* educalvolpz *' + '\n'
      + '* midu        *' + '\n'
      + '***************',
    )
  })
})
