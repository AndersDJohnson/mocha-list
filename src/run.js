/*
 * Based on https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically.
 */

import Mocha from 'mocha'
import { readdirSync } from 'fs'
import { join } from 'path'
import Reporter from '.'

const run = (testFiles, mochaOpts = {}) => {
  if (typeof testFiles === 'string') {
    testFiles = readdirSync(testFiles)
      .filter(file => file.substr(-3) === '.js')
      .map(file => join(testFiles, file))
  }

  // Instantiate a Mocha instance.
  const mocha = new Mocha({
    ui: 'mocha-list',
    reporter: Reporter,
    ...mochaOpts
  })

  // Add each .js file to the mocha instance
  testFiles.forEach(
    file => mocha.addFile(file)
  )

  // You can mock whatever you need to here.

  mocha.run()
}

export default run
