/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/hack-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const lexer = require('php-parser').lexer;
module.exports = {
  matchINITIAL: function() {
    while (this.offset < this.size) {
      let ch = this.input();
      if (ch == "<") {
        ch = this.ahead(1);
        if (ch == "?") {
          if (this.tryMatch("?=")) {
            if (this.short_tags) {
              this.unput(1)
                .appendToken(this.tok.T_OPEN_TAG, 2)
                .nextINITIAL();
              break;
            }
          } else if (this.tryMatch('?hh')) {
            ch = this._input[this.offset + 3];
            if (ch === " " || ch === "\t" || ch === "\n" || ch === "\r") {
              this.unput(1)
                .appendToken(this.tok.T_OPEN_TAG, 5)
                .nextINITIAL();
              break;
            }
          }
        }
      }
    }
    if (this.yytext.length > 0) {
      return this.tok.T_INLINE_HTML;
    } else {
      return false;
    }
  }
};
