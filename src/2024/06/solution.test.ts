import { inBox } from './solution.js'

describe('2024-05', () => {
  it('test #1', () => {
    expectTypeOf(
      inBox,
    )
      .returns
      .toBeBoolean()
  })

  it('test #2', () => {
    expect(
      inBox([
        '###',
        '#*#',
        '###',
      ]),
    ).toBe(
      true,
    )
  })

  it('test #3', () => {
    expect(
      inBox([
        '#*#',
        '###',
        '###',
      ]),
    ).toBe(
      false,
    )
  })

  it('test #4', () => {
    expect(
      inBox([
        '###',
        '# #',
        '###',
      ]),
    ).toBe(
      false,
    )
  })

  it('test #5', () => {
    expect(
      inBox([
        '####',
        '#* #',
        '#  #',
        '####',
      ]),
    ).toBe(
      true,
    )
  })

  it('test #6', () => {
    expect(
      inBox([
        '#####',
        '#   #',
        '#  #*',
        '####',
      ]),
    ).toBe(
      false,
    )
  })

  it('test #7', () => {
    expect(
      inBox([
        '#####',
        '#   #',
        '#   #',
        '#   #',
        '#####',
      ]),
    ).toBe(
      false,
    )
  })

  it('test #8', () => {
    expect(
      inBox([
        '#####',
        '#   #',
        '#   #',
        '*#  #',
        '#####',
      ]),
    ).toBe(
      false,
    )
  })

  it('test #9', () => {
    expect(
      inBox([
        '##*##',
        '#   #',
        '#   #',
        '#   #',
        '#####',
      ]),
    ).toBe(
      false,
    )
  })

  it('test #10', () => {
    expect(
      inBox([
        '####',
        '#  #',
        '##*#',
      ]),
    ).toBe(
      false,
    )
  })

  it('test #11', () => {
    expect(
      inBox([
        '###',
        '###',
        '#*#',
      ]),
    ).toBe(
      false,
    )
  })
})
