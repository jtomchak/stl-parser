const fs = require("fs");
const util = require("util")
const nearley = require("nearley");

const stl = require("./stl.js");
const { compose, stlName, stlTriangle, stlSurfaceArea, stlBoundingBox } = require("../src/utils")

const DEFAULT_FILE = './src/Moon.stl';

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(stl));

/**
 * Ready file in,
 * TODO: grammar parse replace for removal of '\r'
 * @param {String} stlFile Vaild STL file
 */
const getContent = (stlFile = DEFAULT_FILE) => fs.readFileSync(stlFile, 'utf8').replace(/[\r]+/gm, "")

parser.feed(getContent());



let solid = compose(stlBoundingBox(parser.results), stlSurfaceArea(parser.results), stlTriangle(parser.results), stlName(parser.results))({})
console.log(util.inspect(solid, false, null, true /* enable colors */));




