'use strict';
 
function combineFields(fields, delimiter) {
  let arrWithDelimiter = [];
  fields.forEach(field => {
    arrWithDelimiter.push({
      component: 'span',
      thisprops: {
        children: field,
      },
    });
    arrWithDelimiter.push({
      component: 'span',
      children: delimiter,
    });
  });
  return arrWithDelimiter.slice(0, -1);
}

module.exports = {
  combineFields,
};