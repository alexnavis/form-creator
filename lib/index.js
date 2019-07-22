'use strict';

const { handleGroupData, formElementsCreator, } = require('./utilities.js');
const { form } = require('./formElements.js');
const deepmerge = require('deepmerge');
const unflatten = require('flat').unflatten;

class MakeForm {
  /**
   * Creates an instance of MakeForm.
   * @param {Object} options Form Object in case you want to input the entire manifest.
   * @memberof MakeForm
   */
  constructor(options) {
    this.form = Object.assign({}, form(), options);
  }

  /**
   * This method creates each row's form element.
   * @param {Object} options Object representing the entire row.
   * @returns {Object} Returns this.
   * @memberof MakeForm
   */
  addFormElements(options) {
    let ele = {};
    let { gridProps, validations, } = options;
    let groupData = handleGroupData({ gridProps, validations, });
    ele.gridProps = groupData.gridProps;
    let newOptions = Object.assign({}, options);
    delete newOptions.gridProps;
    delete newOptions.validations;
    ele.formElements = formElementsCreator(newOptions);
    this.form.props.formgroups.push(ele);
    this.form.props.validations.push(...groupData.validations);
    return this;
  }
  
  /**
   * This method allows you to add any fields to the form manifest.
   * @param {string} prop Flattened string representation of the form property.
   * @param {any} value The value of the property you are adding to the form manifest.
   * @returns {Object} Returns this.
   * @memberof MakeForm
   */
  addFields(prop, value) {
    let unflattened = unflatten( {[prop] : value, });
    this.form = deepmerge(this.form, unflattened);
    return this;
  }

  /**
   * This method adds fields to the onSubmit property on the form props.
   * @param {Object} _options Object containing onSubmit fields.
   * @returns {Object} Returns this.
   * @memberof MakeForm
   */
  addOnSubmit(_options) {
    let options = Object.assign({}, _options);
    delete options.method;
    options['options'] = { method: _options.method.toUpperCase(), };
    this.addFields('props.onSubmit', options);
    return this;
  }
  
  /**
   * This method returns this.form.
   * @returns {Object} Returns this.form which is the Responsive Form manifest.
   * @memberof MakeForm
   */
  getForm() {
    return this.form;
  }
}

module.exports = MakeForm;