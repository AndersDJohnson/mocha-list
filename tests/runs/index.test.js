describe('something to test', () => {
  before(() => {
    console.log('`before` body not run')
  })
  beforeEach(() => {
    console.log('`beforeEach` body not run')
  })
  after(() => {
    console.log('`after` body not run')
  })
  afterEach(() => {
    console.log('`afterEach` body not run')
  })
  it('should work', () => {
    console.log('`it` not run')
  })
  it.only('should only', () => {
    console.log('`it.only` body not run') 
  })
  it.skip('should skip', () => {
    console.log('`it.skip` body not run')
  })
})
