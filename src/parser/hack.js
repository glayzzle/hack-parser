/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/hack-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {

  /**
   * <ebnf>
   * hh_type_alias_statement ::= non_empty_user_attributes (
   *  function
   * )
   * </ebnf>
   */
  read_hh_type_alias_statement: function() {7
    const attributes = this.read_non_empty_user_attributes();
    let node = null;
    switch(this.token) {
      case this.tok.T_FUNCTION:
        node = this.read_function(false);
        node.attributes = attributes;
        break;
      default: 
        this.expect([
          this.tok.T_FUNCTION,
          this.tok.T_CLASS
          // ... etc...
        ])
    }
    return node;
  },

  /**
   * <ebnf>
   * non_empty_user_attributes ::= T_SL user_attribute_list T_SR
   * </ebnf>
   */
  read_non_empty_user_attributes: function() {
    this.expect(this.tok.T_SL);
    this.next();
    const attributes = this.read_user_attribute_list();
    this.expect(this.tok.T_SR) && this.next();
    return attributes;
  },
  /**
   * <ebnf>
   * user_attribute_list ::= ident_no_semireserved attribute_static_scalar_list (
   *  ',' ident_no_semireserved attribute_static_scalar_list
   * )*
   * </ebnf>
   */
  read_user_attribute_list: function() {
    return this.read_list(() => {
      const node = this.node('attribute_spec');
      const type = this.read_ident_no_semireserved();
      let args = null;
      if (this.token === '(') {
        args = this.read_attribute_static_scalar_list();
      }
      return node(type, args)
    }, ',');
  },

  /**
   * Expects a ident_no_semireserved token
   */
  read_ident_no_semireserved: function() {
    //console.log();
    if (!this.is("ident_no_semireserved")) {
      this.expect(this.tok.T_STRING);
    }
    var type = this.text();
    this.next();
    return type;
  },

  /**
   * <ebnf>
   * attribute_static_scalar_list ::= '(' static_scalar_ae* ')'
   * </ebnf>
   */
  read_attribute_static_scalar_list: function() {
    this .expect('(') && this.next();
    const items = this.read_list(this.read_static_scalar_ae, ',');
    this .expect(')') && this.next();
    return items;
  },

  /**
   * <ebnf>
   * static_scalar_ae ::= common_scalar_ae
   * </ebnf>
   */
  read_static_scalar_ae: function() {
    // @fixme : not yet implement / just a POC
    return this.read_scalar();
  }
};