'use strict';

const OMITTED_PROPERTIES = ['groupElements', 'textOffset', 'hasValidations', 'innerRow',];

/**
 * This function returns a basic form object.
 * @returns {Object} Returns a basic form object.
 */
function form() {
  return {
    component: 'ResponsiveForm',
    thisprops: {},
    asyncprops: {},
    props: {
      onSubmit: {},
      validations: [],
      formgroups: [],
    },
  }
};

/**
 * This function assigns layoutProps to groupElements.
 * @param {Object} options Object representing the entire row.
 * @param {Object} ele Object representing the individual input within the row group.
 * @param {number} i Represents the position of the individual input within the row group.
 * @returns {Object} Returns an Object representing the individual input within the row group with layoutProps added.
 */
function mapGroupElements(options, ele, i) {
  let modifiedOptions = Object.assign({}, options.groupElements[i]);
  OMITTED_PROPERTIES.forEach(ele => {
    delete modifiedOptions[ele];
  });
  return Object.assign({}, box(ele), {
    layoutProps: {
      innerFormItem: true,
      isExpanded: true,
    },
  }, modifiedOptions);
};

/**
 * This function returns the formElement object for the form manifest.
 * @param {Object} options Object representing the entire row.
 * @returns {Object} Returns the formElement object.
 */
function box(options) {
  let formElement = {};
  switch (options.type) {
    case 'text': formElement = Object.assign({}, {
      type: 'text',
      name: options.name,
      placeholder: options.placeholder,
    });
      break;
    case 'layout': formElement = Object.assign({}, {
      type: 'layout',
      layoutProps: {},
      value: {},
    });
      break;
    case 'group': formElement = Object.assign({}, {
      type: 'group',
      label: options.label,
      groupElements: options.groupElements.map(mapGroupElements.bind(null, options)),
    });
      break;
    case 'select': formElement = Object.assign({}, {
      type: 'select',
      name: options.name,
      value: options.value,
    });
      break;
    case 'maskedinput': formElement = Object.assign({}, {
      type: 'maskedinput',
      name: options.name,
      placeholder: options.placeholder,
      label: options.label,
    });
      break;
    case 'checkbox': formElement = Object.assign({}, {
      type: 'checkbox',
      name: options.name,
      validateOnChange: true,
      layoutProps: {
        size: 'isNarrow',
        offset: 'isOffset3Tablet',
      },
    });
      break;
    case 'submit': formElement = Object.assign({}, {
      type: 'submit',
      value: options.value,
      passProps: {
        size: 'isLarge',
      },
      layoutProps: {
        size: 'isNarrow',
        formItemStyle: {
          display: 'flex',
          justifyContent: 'center',
        },
      },
    })
    default: null;
  }
  if (['layout', 'checkbox', 'submit',].indexOf(options.type) === -1 && options.innerRow) {
    formElement = Object.assign({}, formElement, {
      layoutProps: {
        innerFormItem: true,
        isExpanded: true,
      },
    });
  } else if (['layout', 'checkbox', 'submit',].indexOf(options.type) === -1) {
    formElement = Object.assign({}, formElement, {
      layoutProps: {
        horizontalform: true,
      },
    });
  }
  if (options.type === 'layout' && options.textOffset) {
    formElement = Object.assign({}, formElement, {
      layoutProps: {
        offset: 'isOffset3',
        style: {
          marginTop: '-0.5rem',
        },
      },
    });
  };
  if (options.hasValidations) {
    formElement = Object.assign({}, formElement, {
      onBlur: true,
      validateOnBlur: true,
      errorIconRight: true,
    })
  };
  return formElement;
};

module.exports = {
  OMITTED_PROPERTIES,
  form,
  box,
}