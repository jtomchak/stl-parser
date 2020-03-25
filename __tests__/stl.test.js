'use strict';
const fs = require("fs");
const path = require("path");
const util = require("util");
const dirPath = path.join(__dirname);

const nearley = require("nearley");
const stl_grammar = require("../src/stl.ne")

const utils = require("../src/utils")


describe('STL Parse Single Sample', () => {
  // let content = fs.readFileSync("./__tests__/sample.stl", 'utf8');
  let content = fs.readFileSync("./__tests__/Moon.stl", 'utf8').replace(/[\r]+/gm, "");
  // console.log(util.inspect(content, false, null, true /* enable colors */));
  // Create a Parser object from our grammar.
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(stl_grammar));
  // Feed sample content 
  parser.feed(content);

  beforeEach(() => {
    // Set up some mocked out file info before each test
  });


  test('stl file output as string', () => {
    // console.log(util.inspect(parser.results, false, null, true /* enable colors */));
    expect(typeof content).toBe("string");
  })

  test('stlName adds the name property and value to the solid details', () => {
    let solid = utils.stlName(parser.results)()
    expect(solid).toStrictEqual({ name: 'Moon' })
  })

  test('stlTriangle calculates the number of triangles and adds it to solid details', () => {
    let solid = utils.stlTriangle(parser.results)();
    expect(solid).toStrictEqual({ num_triangles: 116 })
  })

  test('stlSurfaceArea calculates the surface area of a given model', () => {
    let area = utils.stlSurfaceArea(parser.results)();
    expect(area).toStrictEqual({ "surface_area": 7.772634278919949 });
  })

  test('stlBoundingBox calculates the 8 points of a minimum bounding box for a given model', () => {
    let { bounding_box } = utils.stlBoundingBox(parser.results)();
    expect(bounding_box.length).toBe(8);
    expect(bounding_box[7]).toStrictEqual({ "x": 1.62841, "y": 0.35, "z": 3 })
  })

});