/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/hack-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expr = require("php-parser").AST.prototype.expression;
const KIND = "attribute_spec";

/**
 * An attribute specification
 * @constructor AttributeSpec
 * @extends {Expression}
 * @property {String} name
 * @property {null|Expression[]} args
 */
const AttributeSpec = Expr.extends(function Attribute_Spec(name, args, docs, location) {
  Expr.apply(this, [KIND, docs, location]);
  this.name = name;
  this.args = args
});

module.exports = AttributeSpec;
