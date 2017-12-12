const { arrayOf } = require('../array-of');

const { string } = require('../string');
const { number } = require('../number');
const { oneOf } = require('../one-of');

const assert = require('assert');

const testArray = require('./test-array');

describe('arrayOf', () => {
  it('should exist', () => {
    assert(arrayOf);
  });

  describe('arrayOf(string)', () => {
    testArray(arrayOf(string));
  });

  describe('arrayOf(number)', () => {
    const arrayOfNum = arrayOf(number);

    it('should exist', () => {
      assert(arrayOfNum);
      assert(arrayOfNum.stringify);
    });

    it('should convert numbers', () => {
      assert.deepEqual(arrayOfNum('1,2,3'), [1, 2, 3]);
    });

    describe('stringify', () => {
      it('should stringify', () => {
        assert.equal(arrayOfNum.stringify([1, 2, 3]), '1,2,3');
      });
    });
  });

  // TODO: maybe support this in the future?
  // describe('arrayOf(bool)', () => {
  //   const aOfB = arrayOf(bool);
  //
  //   it('should exist', () => {
  //     assert(aOfB);
  //     assert(aOfB.stringify);
  //   });
  //
  //   it('should convert numbers', () => {
  //     assert.deepEqual(aOfB('true,false'), [true, false]);
  //   });
  //
  //   describe('stringify', () => {
  //     it('should stringify', () => {
  //       assert.equal(aOfB.stringify([false, true]), 'false,true');
  //     });
  //   });
  // });

  describe('arrayOf(oneOf(w,a,s,d))', () => {
    const arrayOfOneOfWASD = arrayOf(oneOf(['w', 'a', 's', 'd']));

    it('should exist', () => {
      assert(arrayOfOneOfWASD);
      assert(arrayOfOneOfWASD.stringify);
    });

    it('should parse', () => {
      assert.deepEqual(
        arrayOfOneOfWASD('w,w,d,a,s,a'),
        ['w', 'w', 'd', 'a', 's', 'a'],
      );
    });

    it('should be null when one if its elements is not oneOf(w,a,s,d)', () => {
      assert.equal(arrayOfOneOfWASD('w,w,q,a,p,a'), null);
    });

    describe('stringify', () => {
      it('should stringify', () => {
        assert.equal(arrayOfOneOfWASD.stringify(['w', 'a', 's', 'd']), 'w,a,s,d');
      });

      it('should be null when one of the elements is not oneOf(w,a,s,d)', () => {
        assert.equal(arrayOfOneOfWASD.stringify(['w', 'a', 's', 'q']), null);
      });
    });
  });
});
