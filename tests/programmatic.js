/*
 * Based on https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically.
 */

import Mocha from 'mocha'
import { readdirSync } from 'fs'
import { join } from 'path'
import Reporter from '../src'

// Instantiate a Mocha instance.
const mocha = new Mocha({
  ui: 'mocha-list',
  reporter: Reporter
})

const testDir = join(__dirname, 'runs')

// Add each .js file to the mocha instance
readdirSync(testDir)
  .filter(file => file.substr(-3) === '.js')
  .forEach(file => mocha.addFile(join(testDir, file)))

// You can mock whatever you need to here.

// Run the tests.
mocha.run()
