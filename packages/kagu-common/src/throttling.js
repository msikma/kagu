// Kagu - Utility code <https://github.com/msikma/kagu>
// Copyright © 2018, Michiel Sikma. MIT license.

/**
 * Promisified version of setInterval() for use with await.
 * Use like: await wait(1000) to halt execution 1 second.
 */
export const wait = (ms) => (
  new Promise((resolve) => (
    setInterval(() => resolve(), ms)
  ))
)
