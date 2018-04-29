/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/hack-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

// exports token index
// extracted from : https://github.com/facebook/hhvm/blob/master/hphp/parser/hphp.ll
module.exports = {
  values: {
    1000: "T_ASYNC",
    1001: "T_AWAIT",
    1002: "T_COMPILER_HALT_OFFSET",
    1004: "T_DARRAY",
    1003: "T_DICT",
    1023: "T_ENUM",
    1005: "T_INOUT",
    1006: "T_KEYSET",
    1007: "T_LAMBDA_ARROW",
    1008: "T_PIPE",
    1009: "T_SHAPE",
    1010: "T_SUPER",
    1011: "T_TUPLE",
    1012: "T_UNRESOLVED_LT",
    1013: "T_UNRESOLVED_NEWTYPE",
    1014: "T_UNRESOLVED_TYPE",
    1015: "T_USING",
    1016: "T_VARRAY",
    1017: "T_VEC",
    1018: "T_WHERE",
    1019: "T_XHP_ATTRIBUTE",
    1020: "T_XHP_CATEGORY",
    1021: "T_XHP_CHILDREN",
    1022: "T_XHP_REQUIRED"
  },
  names: {
    T_ASYNC: 1000,
    T_AWAIT: 1001,
    T_COMPILER_HALT_OFFSET: 1002,
    T_DARRAY: 1004,
    T_DICT: 1003,
    T_ENUM: 1023,
    T_INOUT: 1005,
    T_KEYSET: 1006,
    T_LAMBDA_ARROW: 1007,
    T_PIPE: 1008,
    T_SHAPE: 1009,
    T_SUPER: 1010,
    T_TUPLE: 1011,
    T_UNRESOLVED_LT: 1012,
    T_UNRESOLVED_NEWTYPE: 1013,
    T_UNRESOLVED_TYPE: 1014,
    T_USING: 1015,
    T_VARRAY: 1016,
    T_VEC: 1017,
    T_WHERE: 1018,
    T_XHP_ATTRIBUTE: 1019,
    T_XHP_CATEGORY: 1020,
    T_XHP_CHILDREN: 1021,
    T_XHP_REQUIRED: 1022
  }
};
