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
    ].map(mapIt)),
    IDENTIFIER: new Map(
      [
        phpTokens.T_ABSTRACT,
        phpTokens.T_ARRAY,
        phpTokens.T_AS,
        phpTokens.T_BREAK,
        phpTokens.T_CALLABLE,
        phpTokens.T_CASE,
        phpTokens.T_CATCH,
        phpTokens.T_CLASS,
        phpTokens.T_CLASS_C,
        phpTokens.T_CLONE,
        phpTokens.T_CONST,
        phpTokens.T_CONTINUE,
        phpTokens.T_DECLARE,
        phpTokens.T_DEFAULT,
        phpTokens.T_DIR,
        phpTokens.T_DO,
        phpTokens.T_ECHO,
        phpTokens.T_ELSE,
        phpTokens.T_ELSEIF,
        phpTokens.T_EMPTY,
        phpTokens.T_ENDDECLARE,
        phpTokens.T_ENDFOR,
        phpTokens.T_ENDFOREACH,
        phpTokens.T_ENDIF,
        phpTokens.T_ENDSWITCH,
        phpTokens.T_ENDWHILE,
        phpTokens.T_EVAL,
        phpTokens.T_EXIT,
        phpTokens.T_EXTENDS,
        phpTokens.T_FILE,
        phpTokens.T_FINAL,
        phpTokens.T_FINALLY,
        phpTokens.T_FUNC_C,
        phpTokens.T_FOR,
        phpTokens.T_FOREACH,
        phpTokens.T_FUNCTION,
        phpTokens.T_GLOBAL,
        phpTokens.T_GOTO,
        phpTokens.T_IF,
        phpTokens.T_IMPLEMENTS,
        phpTokens.T_INCLUDE,
        phpTokens.T_INCLUDE_ONCE,
        phpTokens.T_INSTANCEOF,
        phpTokens.T_INSTEADOF,
        phpTokens.T_INTERFACE,
        phpTokens.T_ISSET,
        phpTokens.T_LINE,
        phpTokens.T_LIST,
        phpTokens.T_LOGICAL_AND,
        phpTokens.T_LOGICAL_OR,
        phpTokens.T_LOGICAL_XOR,
        phpTokens.T_METHOD_C,
        phpTokens.T_NAMESPACE,
        phpTokens.T_NEW,
        phpTokens.T_NS_C,
        phpTokens.T_PRINT,
        phpTokens.T_PRIVATE,
        phpTokens.T_PROTECTED,
        phpTokens.T_PUBLIC,
        phpTokens.T_REQUIRE,
        phpTokens.T_REQUIRE_ONCE,
        phpTokens.T_RETURN,
        phpTokens.T_STATIC,
        phpTokens.T_SWITCH,
        phpTokens.T_THROW,
        phpTokens.T_TRAIT,
        phpTokens.T_TRY,
        phpTokens.T_UNSET,
        phpTokens.T_USE,
        phpTokens.T_VAR,
        phpTokens.T_WHILE,
        phpTokens.T_YIELD,
        // ident_no_semireserved
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
      ].map(mapIt)
    ),
  }
};

// extends the parser with syntax files
[
  require("./parser/function.js"),
  require("./parser/hack.js"),
  require("./parser/statement.js")
].forEach(function(ext) {
  for (const k in ext) {
    parser[k] = ext[k];
  }
});

module.exports = parser;