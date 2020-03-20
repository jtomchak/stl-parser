# STL Parsing

## Background

1. [STL information](https://en.wikipedia.org/wiki/STL_(file_format))

- An ASCII STL file begins with the line
  - `solid name`
- where name is an optional string (though if name is omitted there must still be a space after solid). The file continues with any number of triangles, each represented as follows:

```facet normal ni nj nk
      outer loop
        vertex v1x v1y v1z
        vertex v2x v2y v2z
        vertex v3x v3y v3z
      endloop
    endfacet
```

2. Parsing STL File
  - Using [nearley](https://nearley.js.org/). The plan is to parse out the stl into a known shape, and then compute the required metrics from it. Then based on that possibily move some of those computes in th the 'post processing' phase of the parse. To be determined. 
  - [nearley playground](http://omrelli.ug/nearley-playground/) super helpful
  - learning enough grammer to understand what I'm doing with the grammer build. 

3. Report Metrics from stl file

  - [ ] The number of triangles in the model
  - [ ] The surface area of the model
  - [ ] The bounding box of the model (the 8 points defining a cube (or 3D rectangle) with smallest volume that completely contains the shape), see: https://en.wikipedia.org/wiki/Minimum_bounding_box

```js
// sample output
Number of Triangles: 2
Surface Area: 1.4142
Bounding Box: {x: 0, y: 0, z: 0 }, {x: 1, y: 1, z: 1 } ...
```

4. Performace and improvments