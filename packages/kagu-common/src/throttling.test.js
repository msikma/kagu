// Kagu - Utility code <https://github.com/msikma/kagu>
// Copyright © 2018, Michiel Sikma. MIT license.

import { wait } from './throttling'

describe('wait', () => {
  it('should return a Promise', () => {
    expect(wait(0)).toBeInstanceOf(Promise)
  })

  it('should resolve to null', async () => {
    expect(wait(0)).resolves.toBe(null)
  })
})
