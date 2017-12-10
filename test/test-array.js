const assert = require('assert');

module.exports = (array) => {
  it('should exist', () => {
    assert(array);
    assert(array.stringify);
  });

  it('should return null on null', () => {
    assert.equal(array(null), null);
    assert.equal(array(undefined), null);
  });

  it('should parse', () => {
    const x = array('1,2,3');
    assert.equal(x.length, 3);
    assert.equal(x[0], '1');
    assert.equal(x[1], '2');
    assert.equal(x[2], '3');
  });

  it('should accept values with square brackets', () => {
    const x = array('[1,2,3]');
    assert.equal(x.length, 3);
    assert.equal(x[0], '1');
    assert.equal(x[1], '2');
    assert.equal(x[2], '3');
  });

  it('should accept slightly misformed input', () => {
    const x = array('1,2,3]');
    assert.equal(x.length, 3);
    assert.equal(x[0], '1');
    assert.equal(x[1], '2');
    assert.equal(x[2], '3');

    const y = array('[1,2,3');
    assert.equal(y.length, 3);
    assert.equal(y[0], '1');
    assert.equal(y[1], '2');
    assert.equal(y[2], '3');
  });

  it('should ignore whitespace', () => {
    const x = array(' 1, 2,3] ');
    assert.equal(x.length, 3);
    assert.equal(x[0], '1');
    assert.equal(x[1], '2');
    assert.equal(x[2], '3');
  });

  it('should return an array with an element for an empty string', () => {
    assert.deepEqual(array(''), ['']);
  });

  it('should return an empty strings for ,', () => {
    assert.deepEqual(array(','), ['', '']);
    assert.deepEqual(array(',,'), ['', '', '']);
  });

  describe('stringify', () => {
    it('should stringify', () => {
      assert.equal(array.stringify([1, 2, 3]), '1,2,3');
    });

    it('should return empty string on empty array', () => {
      assert.equal(array.stringify([]), null);
    });

    it('should return empty string on 1 element array with empty string', () => {
      assert.equal(array.stringify(['']), '');
    });

    it('should return , for n element array with emtpy strings', () => {
      assert.equal(array.stringify(['', '']), ',');
      assert.equal(array.stringify(['', '', '']), ',,');
    });

    it('should return null on invalid data', () => {
      assert.equal(array.stringify(null), null);
      assert.equal(array.stringify({}), null);
      assert.equal(array.stringify(0), null);
      assert.equal(array.stringify(1), null);
    });
  });
};
