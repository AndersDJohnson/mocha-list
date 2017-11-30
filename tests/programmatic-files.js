import run from '../src/run'
import { join } from 'path'
import { readdirSync } from 'fs'

const testDir = join(__dirname, 'runs')

const testFiles = readdirSync(testDir)
  .filter(file => file.substr(-3) === '.js')
  .map(file => join(testDir, file))

const mochaOpts = {}

// You can mock whatever you need to here.

run(testFiles, mochaOpts)
