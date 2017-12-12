const { bool } = require('../bool');

const assert = require('assert');

describe('bool', () => {
  it('should exist', () => {
    assert(bool);
    assert(bool.stringify);
  });

  it('should parse', () => {
    assert.equal(bool(''), true);
    assert.equal(bool(null), false);
  });

  it('should parse true and false (string)', () => {
    assert.equal(bool('true'), true);
    assert.equal(bool('false'), false);
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
      assert.equal(bool.stringify(true), '');
      assert.equal(bool.stringify(false), null);
    });

    it('should turn truthy values into true', () => {
      assert.equal(bool.stringify(1), '');
      assert.equal(bool.stringify('somefin'), '');
      assert.equal(bool.stringify({}), '');
      assert.equal(bool.stringify([]), '');
    });

    it('should turn falsy values into false', () => {
      assert.equal(bool.stringify(0), null);
      assert.equal(bool.stringify(undefined), null);
      assert.equal(bool.stringify(null), null);
      assert.equal(bool.stringify(''), null);
    });
  });
});
