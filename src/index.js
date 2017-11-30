import 'babel-polyfill'
import ui from './ui'
import Reporter from './reporter'

// The UI is independent of the reporter, but just to export it somehow:
Reporter.ui = ui

module.exports = Reporter
