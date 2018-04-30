const parser = require('../../src/index');

describe('simple syntax tests', function() {
  it('parser should pass', function() {
    expect(parser.parseCode(`<?hh

      <<__Memoize>>
      function foo(inout vec<string> $bar): {
        /*using (new Baz()) {
        }*/
      }
    `)).toMatchSnapshot();
  });

});
