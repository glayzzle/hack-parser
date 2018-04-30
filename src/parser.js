/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const phpTokens = require('php-parser').tokens.names;
const hackTokens = require('./tokens').names;

// helper for building map of tokens
const mapIt = function(item) {
  return [item, null];
};

/**
 * Define the parser layer
 */
const parser = {
  entries: {
    ident_no_semireserved: new Map([
      phpTokens.T_STRING,
      hackTokens.T_SUPER,
      hackTokens.T_WHERE,
      hackTokens.T_XHP_ATTRIBUTE,
      hackTokens.T_XHP_CATEGORY,
      hackTokens.T_XHP_CHILDREN,
      hackTokens.T_XHP_REQUIRED,
      hackTokens.T_ENUM,
      hackTokens.T_DICT,
      hackTokens.T_VEC,
      hackTokens.T_KEYSET,
      hackTokens.T_VARRAY,
      hackTokens.T_DARRAY  
    ].map(mapIt))
  }
};

// extends the parser with syntax files
[
  require("./parser/hack.js"),
  require("./parser/statement.js")
].forEach(function(ext) {
  for (const k in ext) {
    parser[k] = ext[k];
  }
});

module.exports = parser;