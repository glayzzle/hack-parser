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
engine.prototype.constructor = engine;

/**
 * Split the buffer into tokens
 * @private
 */
engine.tokenGetAll = function(buffer, options) {
  const self = new engine(options);
  return self.tokenGetAll(buffer);
};


/**
 * Static function that parse a php code with open/close tags
 * @private
 */
engine.parseCode = function(buffer, filename, options) {
  if (typeof filename === "object") {
    // retro-compatibility
    options = filename;
    filename = "unknown";
  }
  const self = new engine(options);
  return self.parseCode(buffer, filename);
};

/**
 * Function that parse a php code with open/close tags
 *
 * Sample code :
 * ```php
 * <?php $x = 1;
 * ```
 *
 * Usage :
 * ```js
 * var parser = require('php-parser');
 * var phpParser = new parser({
 *   // some options
 * });
 * var ast = phpParser.parseCode('...php code...', 'foo.php');
 * ```
 * @param {String} buffer - The code to be parsed
 * @param {String} filename - Filename
 * @return {Program}
 */
engine.prototype.parseCode = function(buffer, filename) {
  this.lexer.mode_eval = false;
  this.lexer.all_tokens = false;
  buffer = getStringBuffer(buffer);
  return this.parser.parse(buffer, filename);
};


/**
 * Creates a new instance (Helper)
 * @param {Object} options
 * @return {Engine}
 * @private
 */
engine.create = function(options) {
  return new engine(options);
};

/**
 * Split the buffer into tokens
 * @private
 */
engine.tokenGetAll = function(buffer, options) {
  const self = new engine(options);
  return self.tokenGetAll(buffer);
};

/**
 * Static function that parse a php code with open/close tags
 * @private
 */
engine.parseCode = function(buffer, filename, options) {
  if (typeof filename === "object") {
    // retro-compatibility
    options = filename;
    filename = "unknown";
  }
  const self = new engine(options);
  return self.parseCode(buffer, filename);
};

/**
 * Evaluate the buffer
 * @private
 */
engine.parseEval = function(buffer, options) {
  const self = new engine(options);
  return self.parseEval(buffer);
};

// exports the hack parser
module.exports = engine;
module.exports.default = engine;
