
const compose = (...functions) => args =>
  functions.reduceRight((arg, fn) => fn(arg), args);

/**
 * 
 * @param {vertex 1} p1 
 * @param {vertex 2} p2 
 * @param {vertex 3} p3 
 */
function areaOfTriangle([p1, p2, p3]) {
  const [p1x, p1y, p1z] = p1;
  const [p2x, p2y, p2z] = p2;
  const [p3x, p3y, p3z] = p3;

  const ax = p2x - p1x;
  const ay = p2y - p1y;
  const az = p2z - p1z;
  const bx = p3x - p1x;
  const by = p3y - p1y;
  const bz = p3z - p1z;
  const cx = ay * bz - az * by;
  const cy = az * bx - ax * bz;
  const cz = ax * by - ay * bx;

  return 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
}

/**
 * Iterate and return facets from solid grammarly parsed
 * @param {Array[<Array>]} pResults 
 */
const normalizeFacets = pResults => pResults[1][2].slice(0, pResults[1][2].length - 1)
/**
 * Vertexs are a tuple Array, each element an Array containing X, Y, Z cordinates
 * Hard coded values corrilate to specific locations returned from grammarly parsing these will need to be updated to reflect 
 * changes in the structure of the parser
 * @param {Array[<Array>]} facets 
 */
const normalizeVertexs = facets => facets.map(f => f[1].flat(2)[4].map(l => l.filter((o, idx) => idx == 3 || idx == 5 || idx == 7)))


// Tranform Utils will take the parsed stl array results & the _meta object second
const stlName = pResults => (solidDetails = {}) => {
  solidDetails.name = pResults[1][1][0] //first element in the second array
  return solidDetails;
}

const stlTriangle = pResults => (solidDetails = {}) => {
  solidDetails.num_triangles = pResults[1][2].length - 1 // end of array should be 'endsolid'
  return solidDetails;
}

const stlSurfaceArea = pResults => (solidDetails = {}) => {
  // remove 'endsolid' element from array
  // normalize / format facet into a tuple of tuples
  let vertexs = compose(normalizeVertexs, normalizeFacets)(pResults)
  const area = vertexs.reduce((areaTotal, verts) => (areaTotal + areaOfTriangle(verts)), 0)
  return area;
}


module.exports = {
  stlName,
  stlTriangle,
  stlSurfaceArea
}