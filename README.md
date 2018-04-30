# hack-parser

> JS Hack/HHVMParser - extract AST and tokens

[![Coverage Status](https://coveralls.io/repos/github/glayzzle/hack-parser/badge.svg?branch=master)](https://coveralls.io/github/glayzzle/hack-parser?branch=master)
[![Build Status](https://travis-ci.org/glayzzle/hack-parser.svg?branch=master)](https://travis-ci.org/glayzzle/hack-parser)

---

# Install

```sh
npm install hack-parser --save
```

# Usage

```js
import parser from 'hack-parser';
console.log(
  parser.parseCode(`<?hh
      <<__Memoize>>
      function foo(inout vec<string> $bar): {
      }
  `)
);
```

This will output :

```js
Program {
  "children": Array [
    _Function {
      "arguments": Array [
        Parameter {
          "byref": false,
          "inout": true,
          "kind": "parameter",
          "modifiers": null,
          "name": "bar",
          "nullable": false,
          "type": Identifier {
            "arguments": Array [
              Identifier {
                "kind": "identifier",
                "name": "string",
                "resolution": "uqn",
              },
            ],
            "kind": "identifier",
            "name": "vec",
            "resolution": "rn",
          },
          "value": null,
          "variadic": false,
        },
      ],
      "attributes": Array [
        Attribute_Spec {
          "args": null,
          "kind": "attribute_spec",
          "name": "__Memoize",
        },
      ],
      "body": Block {
        "children": Array [],
        "kind": "block",
      },
      "byref": false,
      "kind": "function",
      "name": "foo",
      "nullable": false,
      "type": null,
    },
  ],
  "errors": Array [],
  "kind": "program",
}
```

> The library is based on [php-parser](https://github.com/glayzzle/php-parser)

# Roadmap for first release

- [ ] Implement all tokens (introduced 43 new tokens)
- [ ] Define new AST nodes
- [ ] Implement the new grammar

**Disclaimer** : This is a work in progress

# Misc

This library is released under BSD-3 license clause.
