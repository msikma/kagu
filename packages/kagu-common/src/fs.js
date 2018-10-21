// Kagu - Utility code <https://github.com/msikma/kagu>
// Copyright © 2018, Michiel Sikma. MIT license.

import Promise from 'bluebird'

module.exports = {
  ...Promise.promisifyAll(require('fs'))
}
