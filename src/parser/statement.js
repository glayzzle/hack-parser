/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/hack-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const parser = require('php-parser').parser.prototype;

module.exports = {
  read_top_statement: function() {
    if (this.token === this.tok.T_SL) {
      return this.read_hh_type_alias_statement();
    }
    return parser.read_top_statement.apply(this, []);
  }
};