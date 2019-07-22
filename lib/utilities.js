'use strict';

const randomKey = Math.random;
const formElements = require('./formElements');

/**
 * This function returns an object with the validations in the proper format.
 * @param {Object[]} arr Array of objects containing validations.
 * @return {Object} Returns an object containing the validations in the proper format.
 */
function modifyValidations(arr) {
  let constraints = {};
  arr.forEach(constraintObj => {
    let constraintKeys = Object.keys(constraintObj);
    let id = constraintObj.constraint;
    if (constraintKeys.length > 1) {
      constraints[id] = {};
      constraintKeys.forEach((key, i) => {
        if (key !== 'constraint') {
          constraints[id][key] = constraintObj[key];
        }
      });
    } else {
      constraints[id] = true;
    }
  })
  return constraints;
};

/**
 * This function handles transforming other data for the row.
 * @param {Object} options Object containing other data for the row. Currently used for gridProps and validations.
 * @return {Object} Object containing gridProps and validations.
 */
function handleGroupData(options) {
  let gridProps = { key: randomKey(), };
  let validations = [];
  if (options.gridProps) {
    Object.keys(options.gridProps).forEach(key => {
      gridProps[key] = options.gridProps[key];
    });
  };
  if (options.validations) {
    Object.keys(options.validations).forEach(key => {
      let constraints = {};
      constraints[key] = Object.assign({}, modifyValidations(options.validations[key]));
      validations.push({
        name: key,
        constraints,
      });
    });
  };
  return { gridProps, validations, };
};

/**
 * This function returns an object representing each row in the form.
 * @param {Object} options Object representing the form row.
 * @return {Object[]} Returns an array of rows in the form.
 */
function formElementsCreator(options) {
  let arr = [];
  let { box, OMITTED_PROPERTIES } = formElements;
  Object.keys(options).forEach(key => {
    let modifiedOptions = Object.assign({}, options[key]);
    OMITTED_PROPERTIES.forEach(ele => {
      delete modifiedOptions[ele];
    });
    arr.push(Object.assign({}, box(options[key]), modifiedOptions));
  });
  return arr;
};

module.exports = {
  modifyValidations,
  handleGroupData,
  formElementsCreator,
}