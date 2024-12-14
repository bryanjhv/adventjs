import { prepareGifts } from './solution.js'

describe('2024-01', () => {
  it('test #1', () => {
    expectTypeOf(
      prepareGifts,
    )
      .returns
      .toBeArray()
  })

  it('test #2', () => {
    expect(
      prepareGifts([3, 1, 2, 3, 4, 2, 5]),
    ).toEqual(
      [1, 2, 3, 4, 5],
    )
  })

  it('test #3', () => {
    expect(
      prepareGifts([5, 5, 5, 5]),
    ).toEqual(
      [5],
    )
  })

  it('test #4', () => {
    expect(
      prepareGifts([1, 2, 3]),
    ).toEqual(
      [1, 2, 3],
    )
  })

  it('test #5', () => {
    expect(
      prepareGifts([]),
    ).toEqual(
      [],
    )
  })

  it('test #6', () => {
    expect(
      prepareGifts([10, 20, 10, 30, 20, 30, 40]),
    ).toEqual(
      [10, 20, 30, 40],
    )
  })

  it('test #7', () => {
    expect(
      prepareGifts([3, 1, 2, 3, 1, 2]),
    ).toEqual(
      [1, 2, 3],
    )
  })
})
