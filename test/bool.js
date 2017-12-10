const { bool } = require('../bool');

const assert = require('assert');

describe('bool', () => {
  it('should exist', () => {
    assert(bool);
    assert(bool.stringify);
  });

  it('should return null on null', () => {
    assert.equal(bool(null), null);
    assert.equal(bool(undefined), null);
  });

  it('should parse', () => {
    assert.equal(bool('true'), true);
    assert.equal(bool('false'), false);
  });

  it('should treat the empty string as true', () => {
    assert.equal(bool(''), true);
  });

  it('should ignore whitespace', () => {
    assert.equal(bool(' true '), true);
    assert.equal(bool(' false '), false);
  });

  it('should accept values that are already parsed', () => {
    assert.equal(bool(true), true);
    assert.equal(bool(false), false);
  });

  describe('stringify', () => {
    it('should stringify', () => {
      assert.equal(bool.stringify(false), 'false');
      assert.equal(bool.stringify(true), 'true');
    });

    it('should turn truthy values into true', () => {
      assert.equal(bool.stringify(1), 'true');
      assert.equal(bool.stringify('somefin'), 'true');
      assert.equal(bool.stringify({}), 'true');
      assert.equal(bool.stringify([]), 'true');
    });

    it('should turn falsy values into false', () => {
      assert.equal(bool.stringify(0), 'false');
      assert.equal(bool.stringify(undefined), 'false');
      assert.equal(bool.stringify(null), 'false');
      assert.equal(bool.stringify(''), 'false');
    });
  });
});
