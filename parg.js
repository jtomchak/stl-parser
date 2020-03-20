const nearley = require("nearley");
const grammar = require("./grammarly.js");

const util = require('util')

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Parse something!
parser.feed("foo\n");
parser.feed("bar");

// parser.results is an array of possible parsings.
console.log(util.inspect(parser.results, false, null, true /* enable colors */)); // [[[[ "foo" ],"\n" ]]]