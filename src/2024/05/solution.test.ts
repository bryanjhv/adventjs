import { organizeShoes } from './solution.js'

describe('2024-05', () => {
  it('test #1', () => {
    expectTypeOf(
      organizeShoes,
    )
      .returns
      .toBeArray()
  })

  it('test #2', () => {
    expect(
      organizeShoes([
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
        { type: 'R', size: 42 },
        { type: 'I', size: 41 },
        { type: 'I', size: 42 },
      ]),
    ).toEqual(
      [38, 42],
    )
  })

  it('test #3', () => {
    expect(
      organizeShoes([
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
        { type: 'I', size: 38 },
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
      ]),
    ).toEqual(
      [38, 38],
    )
  })

  it('test #4', () => {
    expect(
      organizeShoes([
        { type: 'I', size: 38 },
        { type: 'R', size: 36 },
        { type: 'R', size: 42 },
        { type: 'I', size: 41 },
        { type: 'I', size: 42 },
      ]),
    ).toEqual(
      [42],
    )
  })

  it('test #5', () => {
    expect(
      organizeShoes([
        { type: 'I', size: 40 },
        { type: 'R', size: 40 },
        { type: 'I', size: 40 },
        { type: 'R', size: 40 },
      ]),
    ).toEqual(
      [40, 40],
    )
  })

  it('test #6', () => {
    expect(
      organizeShoes([
        { type: 'I', size: 39 },
        { type: 'R', size: 39 },
        { type: 'R', size: 39 },
      ]),
    ).toEqual(
      [39],
    )
  })
})
