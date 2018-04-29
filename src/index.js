/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/hack-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const phpParser = require('php-parser');
const tokens = require("./tokens");
const lexer = require("./lexer");
// define the hack engine / entry point
const engine = function(options) {
  if (!options) {
    options = {};
  }
  options.tokens = tokens;
  options.lexer = lexer;
  phpParser.apply(this, [options]);
};

// extends from PHP parser
engine.prototype = Object.create(phpParser.prototype);
for(var k in phpParser) {
  if (phpParser.hasOwnProperty(k)) {
    engine[k] = phpParser[k];
  }
}
engine.prototype.constructor = engine;


// exports the hack parser
module.exports = engine;
