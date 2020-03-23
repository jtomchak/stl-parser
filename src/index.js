const nearley = require("nearley");
const stl = require("./stl.js");

const fs = require("fs");
const path = require("path");
const util = require("util");
const dirPath = path.join(__dirname);
// Convert readFile, writeFile into Promise version of same
const readFile = util.promisify(fs.readFile);
const utils = require("../src/utils")

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(stl));

const sampleSTL = async () => {
  try {
    const sampleFile = (await readFile(path.join(dirPath, "./sample.stl"))).toString();
    parser.feed(sampleFile);
    let solid = utils.stlName(parser.results)()
    console.log(util.inspect(solid, false, null, true /* enable colors */));
  } catch (error) {
    console.log(error)
  }
}


sampleSTL();
// parser.results is an array of possible parsings.