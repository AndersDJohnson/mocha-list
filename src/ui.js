import Mocha from 'mocha'
import chalk from 'chalk'
import indent from 'indent'
import get from 'lodash.get'
import noop from 'lodash.noop'

let nest = 0

const indented = str => indent(str, nest, '\t')

const chalklog = (color, str) => console.log(get(chalk, color)(indented(str)))

const logName = (color, prefix = '') => name => chalklog(color, prefix + name)

const logNest = (color, prefix = '') => (name, fn) => {
  chalklog(color, prefix + name)
  nest += 1
  if (fn) fn()
  nest -= 1
}

const skip = logName('yellow', 'X ')
const skipBold = logName('yellow.bold', 'X ')

const only = logName('cyan', 'O ')
const onlyBold = logName('cyan.bold', 'O ')

const list = suite => {
  suite.on('pre-require', context => {
    // TODO: Handle `.only` toggling skip style for others.
    context.afterEach = noop
    context.after = noop
    context.beforeEach = noop
    context.before = noop
    context.describe = logNest('green.bold')
    context.describe.only = onlyBold
    context.describe.skip = skipBold
    context.xdescribe = skipBold
    context.it = logName('green')
    context.it.only = only
    context.it.skip = skip
    context.xit = skip
    context.setup = noop
    context.suiteSetup = noop
    context.suiteTeardown = noop
    context.suite = logNest('green')
    context.suite.only = onlyBold
    context.suite.skip = skipBold
    context.xsuite = skipBold
    context.teardown = noop
    context.test = skip
    context.test.only = only 
    context.test.skip = skip
    context.xtest = skip
    context.run = noop
  })
}

Mocha.interfaces['mocha-list'] = list

export default list
