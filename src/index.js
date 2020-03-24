const fs = require("fs");
const util = require("util")
const nearley = require("nearley");

const stl = require("./stl.js");
const { compose, stlName, stlTriangle, stlSurfaceArea } = require("../src/utils")

const DEFAULT_FILE = './src/sample_moon.stl';

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(stl));
const getContent = (stlFile = DEFAULT_FILE) => fs.readFileSync(stlFile, 'utf8')

parser.feed(getContent());



let solid = compose(stlSurfaceArea(parser.results), stlTriangle(parser.results), stlName(parser.results))({})
console.log(util.inspect(solid, false, null, true /* enable colors */));




