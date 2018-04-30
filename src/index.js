/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/hack-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const phpParser = require('php-parser');
const tokens = require("./tokens");
const lexer = require("./lexer");
const parser = require("./parser");
const AST = require("./ast");

// define the hack engine / entry point
const engine = function(options) {
  if (!options) {
    options = {};
  }
  const override = {
    tokens: tokens,
    lexer: lexer,
    parser: parser,
    ast: AST
  };
  phpParser.combine(options, override);
  phpParser.apply(this, [override]);
  // revert bound functions
  for(var k in AST) {
    this.ast[k] = AST[k];
  }
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
 * Evaluate the buffer
 * @private
 */
engine.parseEval = function(buffer, options) {
  const self = new engine(options);
  return self.parseEval(buffer);
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
