// Tranform Utils will take the parsed stl array results & the _meta object second
const stlName = pResults => (solidDetails = {}) => {
  solidDetails.name = pResults[1][1][0] //first element in the second array
  return solidDetails;
}

const stlTriangle = pResults => (solidDetails = {}) => {
  solidDetails.num_triangles = pResults[1][2].length - 1 // end of array should be 'endsolid'
  return solidDetails;
}

module.exports = {
  stlName,
  stlTriangle
}