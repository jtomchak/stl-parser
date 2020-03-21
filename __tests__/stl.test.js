'use strict';
const fs = require("fs");
const path = require("path");
const util = require("util");
const dirPath = path.join(__dirname);

const nearley = require("nearley");
const stl_grammar = require("../src/stl.ne")


describe('STL Parse Single Sample', () => {
  let content = fs.readFileSync(path.join(dirPath, "./sample.stl"), 'utf8');

  beforeEach(() => {
    // Set up some mocked out file info before each test
  });


  test('stl file output as string', () => {
    // console.log(util.inspect(content, false, null, true /* enable colors */));
    expect(typeof content).toBe("string");
  })

  test('stl grammer valid compile', () => {
    // Create a Parser object from our grammar.
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(stl_grammar));
    // Feed sample content 
    parser.feed(content);
    console.log(util.inspect(parser.results, false, null, true /* enable colors */));
    expect(parser.results).toStrictEqual([
      [
        'solid ',
        ['simple', []],
        [
          [
            [
              [
                null,
                'facet ',
                [null, 'normal', null],
                0,
                null,
                0,
                null,
                0,
                []
              ]
            ],
            [
              [
                [
                  null,
                  'outer loop',
                  null,
                  [],
                  [
                    [null, 'vertex ', null, 0, null, 0, null, 0, []],
                    [null, 'vertex ', null, 0, null, 0, null, 0, []],
                    [null, 'vertex ', null, 0, null, 0, null, 0, []]
                  ],
                  [null, 'endloop', null, []]
                ]
              ]
            ],
            [null, 'endfacet', null, []]
          ],
          [['endsolid', null, ['simple', []]]]
        ]
      ],
      [
        'solid ',
        ['simple', []],
        [
          [
            [
              [
                null,
                'facet ',
                [null, 'normal', null],
                0,
                null,
                0,
                null,
                0,
                []
              ]
            ],
            [
              [
                [
                  null,
                  'outer loop',
                  null,
                  [],
                  [
                    [null, 'vertex ', null, 0, null, 0, null, 0, []],
                    [null, 'vertex ', null, 0, null, 0, null, 0, []],
                    [null, 'vertex ', null, 0, null, 0, null, 0, []]
                  ],
                  [null, 'endloop', null, []]
                ]
              ]
            ],
            [null, 'endfacet', null, []]
          ],
          [['endsolid', null, [' simple', []]]]
        ]
      ]
    ]);
  })
});