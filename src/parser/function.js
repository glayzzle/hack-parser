/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/hack-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const parent = require('php-parser').parser.prototype;

module.exports = {
  read_parameter: function() {
    let inout = false;
    let attributes = null;
    if (this.token === this.tok.T_SL) {
      attributes = this.read_user_attribute_list();
    }
    let modifiers = null;
    if (this.is("T_MEMBER_FLAGS")) {
      modifiers = this.text();
      this.next();
    } else {
      inout = this.is_inout();
    }
    const node = parent.read_parameter.apply(this, []);
    node.inout = inout;
    if (attributes) {
      node.attributes = attributes;
    }
    node.modifiers = modifiers;
    return node;
  },
  read_type: function() {
    let node = parent.read_type.apply(this, []);
    if (!node && this.is('ident_no_semireserved')) {
      node = this.node('identifier');
      let relative = true;
      const name = [this.text()];
      this.next();
      // @fixme should update read_namespace_name instead
      node = node(name, relative);
    }
    if (node && this.token === '<') {
      node.arguments = this.read_hh_typeargs();
    }
    return node;
  },
  read_hh_typeargs: function() {
    this.expect('<') && this.next();
    const args = this.read_list(this.read_type, ',');
    this.expect('>') && this.next();
    return args;
  }
};