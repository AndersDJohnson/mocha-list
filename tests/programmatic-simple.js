import run from '../src/run'
import { join } from 'path'

const testDir = join(__dirname, 'runs')

const mochaOpts = {}

// You can mock whatever you need to here.

run(testDir, mochaOpts)
