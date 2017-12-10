const { string } = require('../string');

const assert = require('assert');

describe('string', () => {
  it('should exist', () => {
    assert(string);
    assert(string.stringify);
  });

  it('should return null on null', () => {
    assert.equal(string(null), null);
    assert.equal(string(undefined), null);
  });

  it('should return strings unaltered', () => {
    assert.equal(string('abc'), 'abc');
    assert.equal(string(''), '');
  });

  describe('stringify', () => {
    it('should stringify', () => {
      assert.equal(string.stringify('abc'), 'abc');
      assert.equal(string.stringify(''), '');
    });

    it('should return null on null', () => {
      assert.equal(string.stringify(null), null);
      assert.equal(string.stringify(undefined), null);
    });
  });
});
