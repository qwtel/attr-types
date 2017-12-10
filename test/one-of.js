const { oneOf } = require('../one-of');

const assert = require('assert');

describe('oneOf', () => {
  it('should exist', () => {
    assert(oneOf);
  });

  describe('oneOf(left,right)', () => {
    const oneOfLR = oneOf(['left', 'right']);

    it('should exist', () => {
      assert(oneOfLR);
      assert.equal(typeof oneOfLR, 'function');
    });

    it('should return null on null', () => {
      assert.equal(oneOfLR(null), null);
      assert.equal(oneOfLR(undefined), null);
    });

    it('should parse', () => {
      assert.equal(oneOfLR('left'), 'left');
      assert.equal(oneOfLR('right'), 'right');
    });

    it('should ignore values that aren\'t on of left,right', () => {
      assert.equal(oneOfLR('up'), null);
    });

    describe('stringify', () => {
      it('should stringify', () => {
        assert.equal(oneOfLR.stringify('left'), 'left');
        assert.equal(oneOfLR.stringify('right'), 'right');
      });

      it('should not stringify values that aren\'t one of left,right', () => {
        assert.equal(oneOfLR.stringify('up'), null);
      });
    });
  });
});
