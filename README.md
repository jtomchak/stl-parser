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

  1. PROCESS:
      - `yarn compile:stl` will compile `stl.ne` grammer into JS
      - `yarn stl` will execute 

3. Report Metrics from stl file

  - [x] The number of triangles in the model
  - [x] The surface area of the model
  - [x] The bounding box of the model (the 8 points defining a cube (or 3D rectangle) with smallest volume that completely contains the shape), see: https://en.wikipedia.org/wiki/Minimum_bounding_box

  - [vector or cross](http://math.ucsd.edu/~lni/math20e/l2.pdf)
    - possible solution to surface area
      > Get your surface ready (i am assuming an stl file or 3 arrays) and then compute:
      C = cross(A2-A1,A3-A1,2);
      A = 1/2*sum(sqrt(sum(C.^2,2))); % A is the total area
      This adds up all the vertices and should work.

    - get mathjs for cross function
    - [calc surface area of a 3d mesh](https://stackoverflow.com/questions/26312570/calculate-surface-area-of-a-3d-mesh)

    - The current fastest 3D bounding cuboid algorithm is by [O'Rourke, 1985], which runs in O(n3) time, has several special cases, and is considerably more difficult to implement. O’Rourke’s algoruthm is based on his observation that “A box of minimal volume circumscribing a convex polyhedron must have at least two adjacent faces that contain edges of the polyhedron.” No faster exact algorithm has been found.

    - [bounding box](http://geomalgorithms.com/a08-_containers.html)


```js
// sample output
Number of Triangles: 2
Surface Area: 1.4142
Bounding Box: {x: 0, y: 0, z: 0 }, {x: 1, y: 1, z: 1 } ...
```

4. Performace and improvments

5. Carriage Return Errors

- quick solution is to string replace remove the `\r` using JS before parsing out the stl file with grammar. 
- long term is to work out the grammar parsing so that quick solution can be depreciated. doable with more time.

```sh
      '  endfacet\n  facet normal 0.752641 0.316228 0.577522\n   outer loop\n    ' +
      'vertex 1.42745 0.2 2.25\n    vertex 1.38378 0.35 2.22478\n    vertex 1.15341 ' +
      '0.35 2.525\n   endloop\n  endfacet\n  facet normal 0.577522 0.316228 0.752641\n  ' +
      ' outer loop\n    vertex 0.878412 0.2 2.79904\n    vertex 1.15341 0.35 2.525\n   ' +
      ' vertex 0.853196 0.35 2.75536\n   endloop\n  endfacet\n  facet normal 0.577522 ' +
      '0.316228 0.752641\n   outer loop\n    vertex 1.18907 0.2 2.56066\n    vertex ' +
      '1.15341 0.35 2.525\n    vertex 0.878412 0.2 2.79904\n   endloop\n  endfacet\n  ' +
      'facet normal 0.363046 0.316228 0.876469\n   outer loop\n    vertex 0.878412 ' +
      '0.2 2.79904\n    vertex 0.853196 0.35 2.75536\n    vertex 0.516641 0.2 2.94889\n' +
      '   endloop\n  endfacet\n  facet normal 0.363045 0.316229 0.876469\n   outer ' +
      'loop\n    vertex 0.516641 0.2 2.94889\n    vertex 0.853196 0.35 2.75536\n    ' +
      'vertex 0.503588 0.35 2.90018\n   endloop\n  endfacet\n  facet normal 0.123828 ' +
      '0.316229 0.940567\n   outer loop\n    vertex 0.516641 0.2 2.94889\n    vertex ' +
      '0.503588 0.35 2.90018\n    vertex 0.128412 0.2 3\n   endloop\n  endfacet\n  ' +
      'facet normal 0.123828 0.316228 0.940567\n   outer loop\n    vertex 0.128412 ' +
      '0.2 3\n    vertex 0.503588 0.35 2.90018\n    vertex 0.128412 0.35 2.94957\n   ' +
      'endloop\n  endfacet\nendsolid Moon\n'
```

```sh
      '\n  endfacet\r' +
      '\n  facet normal 0.123828 0.316229 0.940567\r' +
      '\n   outer loop\r' +
      '\n    vertex 0.516641 0.2 2.94889\r' +
      '\n    vertex 0.503588 0.35 2.90018\r' +
      '\n    vertex 0.128412 0.2 3\r' +
      '\n   endloop\r' +
      '\n  endfacet\r' +
      '\n  facet normal 0.123828 0.316228 0.940567\r' +
      '\n   outer loop\r' +
      '\n    vertex 0.128412 0.2 3\r' +
      '\n    vertex 0.503588 0.35 2.90018\r' +
      '\n    vertex 0.128412 0.35 2.94957\r' +
      '\n   endloop\r' +
      '\n  endfacet\r' +
      '\nendsolid Moon\r' +
      '\n'
```
