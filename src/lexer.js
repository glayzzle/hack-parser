/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/hack-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

// list of hack tokens
const tokens = require('./tokens');

/**
 * defines lexer injection points
 */
const lexer = {
  keywords: {
    using: tokens.names.T_USING,
    enum: tokens.names.T_ENUM,
    attribute: tokens.names.T_XHP_ATTRIBUTE,
    category: tokens.names.T_XHP_CATEGORY,
    children: tokens.names.T_XHP_CHILDREN,
    required: tokens.names.T_XHP_REQUIRED,
    __compiler_halt_offset__: tokens.names.T_COMPILER_HALT_OFFSET,
    dict: tokens.names.T_DICT,
    keyset: tokens.names.T_KEYSET,
    shape: tokens.names.T_SHAPE,
    type: tokens.names.T_UNRESOLVED_TYPE,
    newtype: tokens.names.T_UNRESOLVED_NEWTYPE,
    where: tokens.names.T_WHERE,
    await: tokens.names.T_AWAIT,
    vec: tokens.names.T_VEC,
    varray: tokens.names.T_VARRAY,
    darray: tokens.names.T_DARRAY,
    inout: tokens.names.T_INOUT
  }
};


// extends the lexer with states
[
  require("./lexer/initial.js")
].forEach(function(ext) {
  for (const k in ext) {
    lexer[k] = ext[k];
  }
});

module.exports = lexer;
