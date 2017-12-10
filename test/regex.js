const { regex } = require('../regex');

const assert = require('assert');

describe('regex', () => {
  it('should exist', () => {
    assert(regex);
    assert(regex.stringify);
  });

  it('should parse regexes with surrounding /', () => {
    assert.deepEqual(regex('/.*/'), /.*/);
    assert.deepEqual(regex('/[a-z]?/'), /[a-z]?/);
  });

  it('should parse regexes without surrounding /', () => {
    assert.deepEqual(regex('.*'), /.*/);
    assert.deepEqual(regex('[a-z]?'), /[a-z]?/);
  });

  it('should parse regexes with surrounding / and flags', () => {
    assert.deepEqual(regex('/.*/igm'), /.*/igm);
    assert.notEqual(regex('/.*/gm'), /.*/i);
  });

  it('should trim whitespace', () => {
    assert.deepEqual(regex('  .* '), /.*/);
    assert.deepEqual(regex('  /.*/ '), /.*/);
  });

  it('should return null on null', () => {
    assert.equal(regex(null), null);
    assert.equal(regex(undefined), null);
  });

  describe('stringify', () => {
    it('should stringify', () => {
      assert.equal(regex.stringify(/.*/), '/.*/');
      assert.equal(regex.stringify(/.*/g), '/.*/g');
    });

    it('should return null on null', () => {
      assert.equal(regex.stringify(null), null);
      assert.equal(regex.stringify(undefined), null);
    });
  });
});
