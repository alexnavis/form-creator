# CIS Form Creator [![Build Status](https://travis-ci.com/digifi-io/cis-form-creator.svg?token=9kgbbUSsk8imu8BH81zS&branch=master)](https://travis-ci.com/digifi-io/cis-form-creator) [![Coverage Status](https://coveralls.io/repos/github/digifi-io/cis-form-creator/badge.svg?branch=master&t=XpIOLM)](https://coveralls.io/github/digifi-io/cis-form-creator?branch=master)


CIS Form Creator is a class that helps with creating a Responsive Form manifest. By using the given class methods, you can easily add formElements (as well as other fields) to the Responsive Form.

## Class Methods
### addFormElements(options) - Allows you to add form elements to form
  
Options Properties   | Type      | Required | Example 
:---                 | :---      | :---:    | :---  
gridProps            | Object    |    N     | { className: 'test' }
validations          | Object    |    N     | { full_name: [ { constraint: 'presence', message: '^Required', } ] }
< Any Property Name >| Object    |    Y     | { type: 'text', name: 'full_name', placeholder: 'Full Name', hasValidations: true, }

#### Example Code
```   
instance.addFormElements({
    gridProps: {
      key: 'randomKey()',
    },
    validations: {
      'address_street': [{
        constraint: 'presence',
        message: '^Your home address is required.',
      }, {
        constraint: 'length',
        maximum: 100,
      }]
    },
    group1: {
      type: 'text',
      label: 'Home Address',
      name: 'address_street',
      placeholder: 'Street Address',
      hasValidations: true,
    },
  });
 ```
  
### addFields(property, value) - Allows you to add properties directly to the form. Will unflatten nested objects
  
Parameters           | Type      | Required | Example 
:---                 | :---      | :---:    | :---  
property             | String    |    Y     | 'props.ref'
value                | Any       |    Y     | true

#### Example Code
```   
instance.addFields('props.ref', true); // sets unflattened props.ref to true on the form
 ```
 
### addOnSubmit(options)- Allows you to directly modify the onSubmit property for the form

Options Properties   | Type      | Required | Example 
:---                 | :---      | :---:    | :---  
url            | String    |    Y     | '/application/form_submission'
method         | String    |    Y     | 'post'
successCallback| String    |    N     | 'func:this.props.loginUser'
errorCallback  | String    |    N     | 'func:this.props.reduxRouter.push'

#### Example Code
```   
instance.addOnSubmit({ 
  url: '/application/form_submission', 
  method: 'post', 
  successCallback: 'func:this.props.loginUser', 
  errorCallback: 'func:this.props.reduxRouter.push', 
});
```

### getForm - Returns the form manifest

#### Example Code
```   
instance.getForm();
 ```
 
## Install

To install

`$ npm install @digifi/cis-form-creator --save`

To uninstall

`$ npm uninstall @digifi/cis-form-creator --save`

## Development
*Make sure you have grunt installed*

`$ npm install -g grunt-cli jsdoc-to-markdown`

For generating markdown documentation

```
$ grunt doc
$ jsdoc2md lib/*.js index.js > doc/api.md
```

## Testing

*Make sure you have grunt installed*

Run the following command to test and return coverage

`$ grunt test`
