import Mocha from 'mocha'
import noop from 'lodash.noop'

const Reporter = function (runner) {
  Mocha.reporters.Base.call(this, runner)

  runner.on('pass', noop)
  runner.on('fail', noop)
  runner.on('end', noop)
}

 module.exports = Reporter
