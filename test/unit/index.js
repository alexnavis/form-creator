'use strict';
const chai = require('chai');
const expect = chai.expect;
const deepmerge = require('deepmerge');
const path = require('path');
const FormCreator = require(path.join(__dirname, '../../lib'));
const { modifyValidations, handleGroupData, formElementsCreator, createManifest, } = require(path.join(__dirname, '../../lib/utilities.js'));
const { name, nameSubText, homeAddress, location, auth_location, locationSubText, DOB, phone, email, citizenship, auth_citizenship, SSN, SSNSubText, personalAnnualIncome, personalAnnualIncomeSubText, householdAnnualIncome, employmentStatus, tenure, rentOrOwn, mortgage, loanPurpose, maritalStatus, spouseHomeAddress, spouseLocation, lineBreak, password, passwordSubText, confirmPassword, acknowledgeBox, continueButton, checkYourOffersText, auth_checkYourOffersText, hiddenFields, } = require('./formElements');
const manifest = require('./manifest');
const authManifest = require('./manifest/authManifest');
const THEMESETTINGS = require('./manifest/themesettings.js');
const texts = require('./manifest/texts.js');
const selectOptions = require('./manifest/options.js');
const CONSTANTS = require('./manifest/constants');
const confirmModal = require('./manifest/confirmModal');

describe('FormCreator class', function () {
  describe('basic assumptions', function () {
    let instance = new FormCreator();
    describe('instantiates', () => {
      it('formCreator should be an instance of makeClass', () => {
        expect(instance).to.be.an.instanceof(FormCreator);
      });
    });
    describe('returns a form', () => {
      let form = instance.getForm();
      it('a FormCreator class', () => {
        expect(form).to.have.property('component');
        expect(form).to.not.have.property('test');
      });
    });
    describe('adds properties to the form', () => {
      instance.addFields('props.ref', 'func:window.addRef');
      instance.addFormElements(
        {
          gridProps: {
            className: 'test',
          },
          group1: {
            type: 'group',
            label: 'Date',
            groupElements: [
              {
                type: 'text', name: 'Month', placeholder: 'Month',
              }, {
                type: 'text', name: 'Day', placeholder: 'Day',
              }, {
                type: 'text', name: 'Year', placeholder: 'Year',
              }
            ]
          },
        });
      instance.addOnSubmit({ url: '/', method: 'post', });
      let form = instance.getForm();
      it('ref property', () => {
        expect(form.props).to.have.property('ref');
      });
      it('groupElements', () => {
        expect(form.props.formgroups[0].formElements[0].groupElements).to.have.length(3);
      });
      it('onSubmit', () => {
        expect(form.props.onSubmit).to.have.property('url');
        expect(form.props.onSubmit).to.have.property('options');
      });
    });
  });
});

describe('Utilities library', function () {
  describe('modifyValidations function', () => {
    let validations1 = [
      {
        constraint: 'exclusion',
        within: ['State'],
        message: '^This is required'
      }, {
        constraint: 'length',
        maximum: 30,
      }
    ];
    let validationsAns1 = {
      exclusion: {
        within: ['State'],
        message: '^This is required',
      },
      length: {
        maximum: 30,
      },
    };
    let validations2 = [
      {
        constraint: 'presence',
      }, {
        constraint: 'length',
        maximum: 30,
      }
    ];
    let validationsAns2 = {
      presence: true,
      length: {
        maximum: 30,
      },
    };
    it('returns a validations object that is in the proper format', () => {
      expect(modifyValidations(validations1)).to.deep.equal(validationsAns1);
      expect(modifyValidations(validations2)).to.deep.equal(validationsAns2);
    });
  });
  describe('handleGroupData function', () => {
    let data = {
      validations: {
        test1: [
          {
            constraint: 'exclusion',
            within: ['State'],
            message: '^This is required'
          },
        ],
        test2: [
          {
            constraint: 'length',
            maximum: 30,
          }
        ],
      },
    };
    let data2 = {
      gridProps: {
        className: 'test',
      },
    };
    it('returns an object containing gridProps and validations', () => {
      expect(handleGroupData(data)).to.have.property('gridProps');
      expect(typeof handleGroupData(data).gridProps.key).to.equal('number');
      expect(handleGroupData(data)).to.have.property('validations');
      expect(handleGroupData(data).gridProps).to.not.have.property('className');
      expect(handleGroupData(data2).gridProps).to.have.property('className');
    });
  });
  describe('formElementsCreator function', () => {
    let example1 = [{
      type: 'group',
      label: 'Left',
      test: 'test',
      groupElements: [
        {
          type: 'input', name: 'left', placeholder: 'Left',
        }
      ],
    }, {
      type: 'group',
      label: 'Right',
      groupElements: [
        {
          type: 'input', name: 'right', placeholder: 'Right',
        },
      ]
    },
    ];
    it('returns an object representing a row with two labels and two input boxes', () => {
      let row1 = formElementsCreator(example1);
      expect(row1).to.have.length(2);
      expect(row1[0]).to.have.property('test');
      expect(row1[1]).to.not.have.property('test');
      expect(row1[0].groupElements).to.have.length(1);
      expect(row1[1].groupElements).to.have.length(1);
    });
    let example2 = [{
      type: 'group',
      label: 'Full Name',
      test: 'test',
      groupElements: [
        {
          type: 'text', name: 'First Name', placeholder: 'First Name',
        }, {
          type: 'input', name: 'Last Name', placeholder: 'Last Name',
        },
      ]
    }];
    it('returns an object representing a row with 1 label and two input boxes', () => {
      let row2 = formElementsCreator(example2);
      expect(row2).to.have.length(1);
      expect(row2[0]).to.have.property('test');
      expect(row2[0].groupElements).to.have.length(2);
      expect(row2[0].groupElements[0]).to.have.property('layoutProps');
      expect(row2[0].groupElements[1]).to.have.property('layoutProps');
    });
  });
});

describe('Creates manifests', function () {
  describe('New application form manifest', () => {
    let instance = new FormCreator();
    instance.addFields('hasWindowFunc', true);
    instance.addFields('thisprops', {
      dynamics: ['dynamic']
    });
    instance.addFields('asyncprops', {
      hiddenFields: ['hiddendata', 'hiddenfields',],
      documentData: ['hiddendata', 'transform', 'organized_docs'],
    });
    instance.addOnSubmit({
      url: '/application/form_submission',
      method: 'post',
      successCallback: 'func:this.props.loginUser',
      errorCallback: 'func:this.props.reduxRouter.push',
    });
    instance.addFields('props', {
      ref: 'func:window.addRef',
      onChange: 'func:window.applicationOnChange',
      errorCallback: 'func:this.props.reduxRouter.push',
      blockPageUI: true,
      blockPageUILayout: THEMESETTINGS.settings.client_configurations.blockPageUILayout,
      useDynamicData: true,
      dynamicField: 'formData',
      flattenFormData: true,
      footergroups: false,
    });
    instance.addFormElements(name);
    instance.addFormElements(nameSubText(CONSTANTS));
    instance.addFormElements(homeAddress);
    instance.addFormElements(location(selectOptions));
    instance.addFormElements(locationSubText(CONSTANTS));
    instance.addFormElements(DOB(selectOptions));
    instance.addFormElements(phone(CONSTANTS));
    instance.addFormElements(email);
    instance.addFormElements(citizenship(selectOptions));
    instance.addFormElements(SSN(CONSTANTS));
    instance.addFormElements(SSNSubText(CONSTANTS));
    instance.addFormElements(personalAnnualIncome(CONSTANTS));
    instance.addFormElements(personalAnnualIncomeSubText(CONSTANTS));
    instance.addFormElements(householdAnnualIncome(CONSTANTS));
    instance.addFormElements(employmentStatus(selectOptions));
    instance.addFormElements(tenure(selectOptions));
    instance.addFormElements(rentOrOwn(selectOptions));
    instance.addFormElements(mortgage(CONSTANTS));
    instance.addFormElements(loanPurpose(selectOptions));
    instance.addFormElements(maritalStatus(selectOptions));
    instance.addFormElements(spouseHomeAddress);
    instance.addFormElements(spouseLocation(selectOptions));
    instance.addFormElements(lineBreak(CONSTANTS));
    instance.addFormElements(password);
    instance.addFormElements(passwordSubText(CONSTANTS));
    instance.addFormElements(confirmPassword);
    instance.addFormElements(acknowledgeBox(CONSTANTS));
    instance.addFormElements(deepmerge(continueButton(CONSTANTS, confirmModal), checkYourOffersText(CONSTANTS)));
    let form = instance.getForm();
    it('that deep equals manifest', () => {
      expect(form).to.deep.equal(manifest);
    });
  });
  describe('Auth application form manifest', () => {
    let instance = new FormCreator();
    instance.addFields('hasWindowFunc', true);
    instance.addFields('thisprops', {
      dynamics: ['dynamic']
    });
    instance.addFields('asyncprops', {
      formdata: ['applicationdata', 'transform', 'customer',],
    });
    instance.addOnSubmit({
      url: '/application/auth/form_submission',
      method: 'post',
      successCallback: 'func:this.props.reduxRouter.push',
      errorCallback: 'func:this.props.reduxRouter.push',
    });
    instance.addFields('props', {
      ref: 'func:window.addRef',
      onChange: 'func:window.authApplicationOnChange',
      blockPageUI: true,
      blockPageUILayout: THEMESETTINGS.settings.client_configurations.blockPageUILayout,
      useDynamicData: true,
      dynamicField: 'formData',
      flattenFormData: true,
      footergroups: false,
    });
    instance.addFields('props.hiddenFields', hiddenFields);
    instance.addFormElements(name);
    instance.addFormElements(nameSubText(CONSTANTS));
    instance.addFormElements(homeAddress);
    instance.addFormElements(auth_location(selectOptions));
    instance.addFormElements(locationSubText(CONSTANTS));
    instance.addFormElements(phone(CONSTANTS));
    instance.addFormElements(auth_citizenship(selectOptions));
    instance.addFormElements(personalAnnualIncome(CONSTANTS));
    instance.addFormElements(personalAnnualIncomeSubText(CONSTANTS));
    instance.addFormElements(householdAnnualIncome(CONSTANTS));
    instance.addFormElements(employmentStatus(selectOptions));
    instance.addFormElements(tenure(selectOptions));
    instance.addFormElements(rentOrOwn(selectOptions));
    instance.addFormElements(mortgage(CONSTANTS));
    instance.addFormElements(loanPurpose(selectOptions));
    instance.addFormElements(maritalStatus(selectOptions));
    instance.addFormElements(spouseHomeAddress);
    instance.addFormElements(spouseLocation(selectOptions));
    instance.addFormElements(acknowledgeBox(CONSTANTS));
    instance.addFormElements(deepmerge(continueButton(CONSTANTS, confirmModal), auth_checkYourOffersText(CONSTANTS)));
    let form = instance.getForm();
    it('that deep equals manifest', () => {
      expect(form).to.deep.equal(authManifest);
    });
  });
});