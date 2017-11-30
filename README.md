# mocha-list
> A mocha UI & reporter to list tests without running.

Useful if you want to provide a report of test cases covered.

## Use

[![yarn add --dev mocha-list (copy)](https://copyhaste.com/i?t=yarn%20add%20--dev%20mocha-list)](https://copyhaste.com/c?t=yarn%20add%20--dev%20mocha-list "yarn add --dev mocha-list (copy)") [![npm install --save-dev mocha-list (copy)](https://copyhaste.com/i?t=npm%20install%20--save-dev%20mocha-list)](https://copyhaste.com/c?t=npm%20install%20--save-dev%20mocha-list "npm install --save-dev mocha-list (copy)")
### CLI

To run, e.g., on tests in `tests/runs`:

```sh
mocha --ui mocha-list --reporter mocha-list tests/runs
```

### API

You may need custom code to mock certain globals from your tests.
You can do so by creating a script to run your tests programmatically.

We expose a `mocha-list/run` file to make this easy.

```js
import run from 'mocha-list/run'
import stubObjProxy from 'stub-obj-proxy'
import { join } from 'path'

const testDir = join(__dirname, 'runs')

const mochaOpts = {}

// You can mock whatever you need to here.
global.window = stubObjProxy()

run(testDir, mochaOpts)
```

For more examples, see:
* [`tests/programmatic-simple.js`](tests/programmatic-simple.js)
* [`tests/programmatic-files.js`](tests/programmatic-files.js)
* [`tests/programmatic.js`](tests/programmatic.js)

## Development

We have to link `mocha-list` to itself since third party reporters read from `node_modules`:

```sh
yarn link-self
```
