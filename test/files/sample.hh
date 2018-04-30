<?hh
  <<__Memoize>>
  function foo(inout vec<string> $bar): {
    using (new Baz()) {
    }
  }