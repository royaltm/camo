"use strict";

const UPDATE_METHODS = exports.UPDATE_METHODS = [

  "set",
  "unset",
  "inc",
  "min",
  "max",
  "push",
  "addToSet",
  "pop",
  "pull"

];

exports.updateMethodsRe = new RegExp(`^(?:${ UPDATE_METHODS.join('|') })$`);
exports.UPDATE_METHOD_NOT_ALLOWED_MSG = `update option may be one of: "${UPDATE_METHODS.join('", "')}"`;
