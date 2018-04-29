const parser = require('../../src/index');

describe('simple syntax tests', function() {
  it('extend tokens', function() {
    const instance = new parser();
    expect(instance.tokens).toMatchSnapshot();
  });
  it('should pass', function() {
    expect(parser.tokenGetAll(`<?hh

      <<__Memoize>>
      function foo(inout vec<string> $bar): {
        using (new Baz()) {
        }
      }
    `)).toMatchSnapshot();
  });
});
