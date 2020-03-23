// Tranform Utils will take the parsed stl array results & the _meta object second
const stlName = pResults => (metaDetails = {}) => {
  metaDetails.name = pResults[1][1][0] //first element in the second array
  return metaDetails;
}

module.exports = {
  stlName
}