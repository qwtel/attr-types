const { number } = require('../number');

const assert = require('assert');

describe('number', () => {
  it('should exist', () => {
    assert(number);
    assert(number.stringify);
  });

  it('should return null on null', () => {
    assert.equal(number(null), null);
    assert.equal(number(undefined), null);
  });

  it('should parse', () => {
    assert.equal(number('3'), 3);
    assert.equal(number('0'), 0);
  });

  it('should floating point', () => {
    assert.equal(number('0.3'), 0.3);
  });

  it('should parse hex', () => {
    assert.equal(number('0x01'), 1);
  });

  it('should parse other number formats', () => {
    assert.equal(number('0b1111'), 15);
    assert.equal(number('0o17'), 15);
  });

  it('should ignore whitespace', () => {
    assert.equal(number(' 3 '), 3);
    assert.equal(number(' 0 '), 0);
  });

  it('should accept parsed numbers', () => {
    assert.equal(number(3), 3);
    assert.equal(number(0), 0);
  });

  it('should return NaN when supplying garbage', () => {
    assert(Number.isNaN(number('{}')));
    assert(Number.isNaN(number('[]')));
  });

  describe('stringify', () => {
    it('should stringify', () => {
      assert.equal(number.stringify(3), '3');
      assert.equal(number.stringify(0), '0');
    });

    it('should return null on null', () => {
      assert.equal(number.stringify(null), null);
      assert.equal(number.stringify(undefined), null);
    });
  });
});
