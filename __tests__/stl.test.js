'use strict';
const fs = require("fs");
const path = require("path");
const util = require("util");
const dirPath = path.join(__dirname);

const nearley = require("nearley");
const stl_grammar = require("../src/stl.ne")

const utils = require("../src/utils")


describe('STL Parse Single Sample', () => {
  let content = fs.readFileSync(path.join(dirPath, "./sample.stl"), 'utf8');
  // Create a Parser object from our grammar.
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(stl_grammar));
  // Feed sample content 
  parser.feed(content);

  beforeEach(() => {
    // Set up some mocked out file info before each test
  });


  test('stl file output as string', () => {
    // console.log(util.inspect(content, false, null, true /* enable colors */));
    expect(typeof content).toBe("string");
  })

  test('stl grammer valid compile (snapshot)', () => {
    // console.log(util.inspect(parser.results, false, null, true /* enable colors */));
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
                -0.785875,
                null,
                0,
                null,
                -0.618385,
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
                    [
                      null, 'vertex ',
                      null, 0.360463,
                      null, 0,
                      null, 2.525,
                      []
                    ],
                    [
                      null,
                      'vertex ',
                      null,
                      0,
                      null,
                      0,
                      null,
                      2.98309,
                      []
                    ],
                    [
                      null, 'vertex ',
                      null, 0.360463,
                      null, 0.2,
                      null, 2.525,
                      []
                    ]
                  ],
                  [null, 'endloop', null, []]
                ]
              ]
            ],
            [null, 'endfacet', null, []]
          ],
          [
            [
              [
                null,
                'facet ',
                [null, 'normal', null],
                -0.785875,
                null,
                0,
                null,
                -0.618385,
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
                    [
                      null,
                      'vertex ',
                      null,
                      0,
                      null,
                      0,
                      null,
                      2.98309,
                      []
                    ],
                    [
                      null, 'vertex ',
                      null, 0,
                      null, 0.2,
                      null, 2.98309,
                      []
                    ],
                    [
                      null, 'vertex ',
                      null, 0.360463,
                      null, 0.2,
                      null, 2.525,
                      []
                    ]
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
                -0.785875,
                null,
                0,
                null,
                -0.618385,
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
                    [
                      null, 'vertex ',
                      null, 0.360463,
                      null, 0,
                      null, 2.525,
                      []
                    ],
                    [
                      null,
                      'vertex ',
                      null,
                      0,
                      null,
                      0,
                      null,
                      2.98309,
                      []
                    ],
                    [
                      null, 'vertex ',
                      null, 0.360463,
                      null, 0.2,
                      null, 2.525,
                      []
                    ]
                  ],
                  [null, 'endloop', null, []]
                ]
              ]
            ],
            [null, 'endfacet', null, []]
          ],
          [
            [
              [
                null,
                'facet ',
                [null, 'normal', null],
                -0.785875,
                null,
                0,
                null,
                -0.618385,
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
                    [
                      null,
                      'vertex ',
                      null,
                      0,
                      null,
                      0,
                      null,
                      2.98309,
                      []
                    ],
                    [
                      null, 'vertex ',
                      null, 0,
                      null, 0.2,
                      null, 2.98309,
                      []
                    ],
                    [
                      null, 'vertex ',
                      null, 0.360463,
                      null, 0.2,
                      null, 2.525,
                      []
                    ]
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

  test('stlName adds the name property and value to the solid details', () => {
    let solid = utils.stlName(parser.results)()
    expect(solid).toStrictEqual({ name: 'simple' })
  })

  test('stlTriangle calculates the number of triangles and adds it to solid details', () => {
    let solid = utils.stlTriangle(parser.results)();
    expect(solid).toStrictEqual({ num_triangles: 2 })
  })

  test('stlSurfaceArea calculates the surface area of a given model', () => {
    let area = utils.stlSurfaceArea(parser.results)();
    expect(area).toEqual(0.11658130595751617);
  })


});