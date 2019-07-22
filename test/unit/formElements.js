'use strict';

exports.name = {
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    fname: [{
      constraint: 'presence',
      message: '^Your first name is required.',
    }, {
      constraint: 'length',
      maximum: 30,
    }],
    lname: [{
      constraint: 'presence',
      message: '^Your last name is required.',
    }, {
      constraint: 'length',
      maximum: 30,
    }],
  },
  name: {
    type: 'group',
    label: 'Name',
    groupElements: [
      {
        type: 'text',
        name: 'fname',
        placeholder: 'First Name',
        hasValidations: true,
        innerRow: true,
      },
      {
        type: 'text',
        name: 'lname',
        placeholder: 'Last Name',
        hasValidations: true,
        innerRow: true,
      },
    ],
  },
};

exports.nameSubText = (CONSTANTS) => ({
  gridProps: {
    key: 'randomKey()',
  },
  nameSubText: {
    type: 'layout',
    textOffset: true,
    value: {
      component: 'p',
      props: {
        style: CONSTANTS.styles.fontSizes.contentSmall,
      },
      children: 'Please provide your full legal name.',
    },
  },
});

exports.homeAddress = {
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
  homeAddress: {
    type: 'text',
    label: 'Home Address',
    name: 'address_street',
    placeholder: 'Street Address',
    hasValidations: true,
  },
};

const address_city = {
  type: 'text',
  name: 'address_city',
  passProps: {},
  hasValidations: true,
  placeholder: 'City',
  innerRow: true,
};

const auth_address_city = {
  type: 'text',
  name: 'address_city',
  hasValidations: true,
  placeholder: 'City',
  innerRow: true,
};

const address_state = selectOptions => ({
  type: 'select',
  name: 'address_state',
  errorIconRight: true,
  value: 'State',
  disableOnChange: true,
  customOnChange: 'func:window.selectOnChange',
  passProps: {
    className: '__select_initial'
  },
  innerRow: true,
  options: [{
    label: 'State',
    value: 'State',
    disabled: true,
  },].concat(selectOptions.stateOptions),
});

const auth_address_state = selectOptions => ({
  type: 'select',
  name: 'address_state',
  errorIconRight: true,
  value: 'State',
  disableOnChange: true,
  customOnChange: 'func:window.selectOnChange',
  innerRow: true,
  options: [{
    label: 'State',
    value: 'State',
    disabled: true,
  },].concat(selectOptions.stateOptions),
});

const address_postal_code = {
  type: 'text',
  name: 'address_postal_code',
  placeholder: 'Zip Code',
  hasValidations: true,
  innerRow: true,
  passProps: {
    maxLength: 5,
  },
};

exports.location = selectOptions => ({
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    address_city: [{
      constraint: 'presence',
      message: '^Your home city is required.',
    }, {
      constraint: 'length',
      maximum: 30,
    }],
    address_state: [{
      constraint: 'exclusion',
      within: ['State',],
      message: '^Your home state is required.',
    }, {
      constraint: 'length',
      maximum: 30,
    }],
    address_postal_code: [{
      constraint: 'presence',
      message: '^Your home ZIP Code is required.',
    }, {
      constraint: 'numericality',
      onlyInteger: true,
      message: '^Your ZIP Code must be 5 characters in length.',
    }, {
      constraint: 'length',
      is: 5,
      message: '^Your ZIP Code must be 5 characters in length.',
    }]
  },
  location: {
    type: 'group',
    name: 'location',
    label: 'Location ',
    groupElements: [address_city, address_state(selectOptions), address_postal_code,]
  },
});

exports.auth_location = selectOptions => ({
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    address_city: [{
      constraint: 'presence',
      message: '^Your home city is required.',
    }, {
      constraint: 'length',
      maximum: 30,
    }],
    address_state: [{
      constraint: 'exclusion',
      within: ['State',],
      message: '^Your home state is required.',
    }, {
      constraint: 'length',
      maximum: 30,
    }],
    address_postal_code: [{
      constraint: 'presence',
      message: '^Your home ZIP Code is required.',
    }, {
      constraint: 'numericality',
      onlyInteger: true,
      message: '^Your ZIP Code must be 5 characters in length.',
    }, {
      constraint: 'length',
      is: 5,
      message: '^Your ZIP Code must be 5 characters in length.',
    }]
  },
  auth_location: {
    type: 'group',
    name: 'location',
    label: 'Location ',
    groupElements: [auth_address_city, auth_address_state(selectOptions), address_postal_code,]
  },
});

exports.locationSubText = CONSTANTS => ({
  gridProps: {
    key: 'randomKey()',
  },
  locationSubText: {
    type: 'layout',
    textOffset: true,
    value: {
      component: 'div',
      children: [{
        component: 'p',
        props: {
          style: CONSTANTS.styles.fontSizes.contentSmall,
        },
        children: [{
          component: 'div',
          props: {
            style: {
              display: 'inline',
            },
          },
          children: 'If your state is not listed it means that loans are not offered in your state.  ',
        },
        {
          component: 'ResponsiveButton',
          props: {
            onClick: 'func:this.props.createModal',
            onclickProps: {
              title: 'Why Isn\'t My State Listed?',
              pathname: '/modal/application/location',
            },
            style: {
              textDecoration: 'underline',
            },
            buttonProps: {
              color: 'isLink'
            },
          },
          children: 'More Information',
        },
        ],
      },],
    },
  },
});

exports.DOB = selectOptions => ({
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    birth_month: [{
      constraint: 'exclusion',
      within: ['Month',],
      message: '^Your birth month is required.',
    }],
    birth_day: [{
      constraint: 'exclusion',
      within: ['Day',],
      message: '^Your birth day is required.',
    }],
    birth_year: [{
      constraint: 'exclusion',
      within: ['Year',],
      message: '^Your birth year is required.',
    }],
  },
  DOB: {
    type: 'group',
    name: 'date-of-birth',
    label: 'Date of Birth',
    groupElements: [
      {
        type: 'select',
        name: 'birth_month',
        value: 'Month',
        customOnChange: 'func:window.selectOnChange',
        disableOnChange: true,
        passProps: {
          className: '__select_initial'
        },
        innerRow: true,
        options: [{
          label: 'Month',
          value: 'Month',
          disabled: true,
        },].concat(selectOptions.monthOptions),
      },
      {
        type: 'select',
        name: 'birth_day',
        value: 'Day',
        disableOnChange: true,
        innerRow: true,
        customOnChange: 'func:window.selectOnChange',
        passProps: {
          className: '__select_initial'
        },
        options: [{
          label: 'Day',
          value: 'Day',
          disabled: true,
        },].concat(selectOptions.dayOptions),
      },
      {
        type: 'select',
        name: 'birth_year',
        disableOnChange: true,
        innerRow: true,
        customOnChange: 'func:window.selectOnChange',
        passProps: {
          className: '__select_initial'
        },
        value: 'Year',
        options: [{
          label: 'Year',
          value: 'Year',
          disabled: true,
        },].concat(selectOptions.yearOptions),
      },
    ],
  },
});

exports.phone = CONSTANTS => ({
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    phone: [{
      constraint: 'presence',
      message: '^Your phone number is required.',
    }, {
      constraint: 'length',
      is: 14,
      message: '^Your phone number must be 10 characters in length.',
    }],
  },
  phone: {
    type: 'maskedinput',
    name: 'phone',
    placeholder: 'Personal Phone Number',
    label: 'Phone',
    passProps: {
      guide: false,
      mask: 'func:window.phoneNumberFormatter',
      autoComplete: 'off',
      autoCorrect: 'off',
      autoCapitalize: 'off',
      spellCheck: false,
    },
    hasValidations: true,
    customErrorProps: {
      fontSize: CONSTANTS.styles.fontSizes.contentMedium.fontSize,
      marginTop: 0,
    },
  },
});

exports.email = {
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    username: [{
      constraint: 'email',
      message: '^A valid email address is required.',
    }, {
      constraint: 'presence',
      message: '^Your email address is required.',
    }, {
      constraint: 'length',
      maximum: 100,
    }],
  },
  email: {
    type: 'text',
    name: 'username',
    placeholder: 'Personal Email Address',
    hasValidations: true,
    label: 'Email',
    passProps: {},
  },
};

exports.citizenship = selectOptions => ({
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    citizenship: [{
      constraint: 'exclusion',
      within: ['Citizenship Status',],
      message: '^Your citizenship status is required.',
    }],
  },
  citizenship: {
    type: 'select',
    label: 'Citizenship',
    name: 'citizenship',
    value: 'Citizenship Status',
    disableOnChange: true,
    customOnChange: 'func:window.selectOnChange',
    passProps: {
      className: '__select_initial'
    },
    options: [{
      label: 'Citizenship Status',
      value: 'Citizenship Status',
      disabled: true,
    },].concat(selectOptions.citizenshipOptions),
  },
});

exports.auth_citizenship = selectOptions => ({
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    citizenship: [{
      constraint: 'exclusion',
      within: ['Citizenship Status',],
      message: '^Your citizenship status is required.',
    }],
  },
  auth_citizenship: {
    type: 'select',
    label: 'Citizenship',
    name: 'citizenship',
    value: 'Citizenship Status',
    disableOnChange: true,
    options: [{
      label: 'Citizenship Status',
      value: 'Citizenship Status',
      disabled: true,
    },].concat(selectOptions.citizenshipOptions),
  },
});

exports.SSN = CONSTANTS => ({
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    ssn: [{
      constraint: 'presence',
      message: '^Your SSN is required.',
    }, {
      constraint: 'length',
      is: 11,
      message: '^Your SSN must be 9 characters in length.',
    }],
  },
  SSN: {
    type: 'maskedinput',
    name: 'ssn',
    placeholder: 'Social Security Number',
    label: 'SSN',
    hasValidations: true,
    bindprops: true,
    customErrorProps: {
      fontSize: CONSTANTS.styles.fontSizes.contentMedium.fontSize,
      marginTop: 0,
    },
    passProps: {
      mask: 'func:window.SSNFormatter',
      guide: false,
      autoComplete: 'off',
      autoCorrect: 'off',
      autoCapitalize: 'off',
      spellCheck: false,
    },
  },
});

exports.SSNSubText = CONSTANTS => ({
  gridProps: {
    key: 'randomKey()',
  },
  SSNSubText: {
    type: 'layout',
    textOffset: true,
    value: {
      component: 'div',
      children: [{
        component: 'p',
        props: {
          style: CONSTANTS.styles.fontSizes.contentSmall,
        },
        children: 'Your SSN is required to pull your credit information.',
      },],
    },
  },
});

exports.personalAnnualIncome = CONSTANTS => ({
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    income: [{
      constraint: 'presence',
      message: '^Your annual income is required.',
    }, {
      constraint: 'length',
      maximum: 10,
      message: '^Your annual income must be less than 8 digits in length.'
    }],
  },
  personalAnnualIncome: {
    type: 'maskedinput',
    name: 'income',
    placeholder: 'Personal Annual Income (Pre-Tax)',
    hasValidations: true,
    createNumberMask: true,
    passProps: {
      mask: 'func:window.testMaskDollarInput',
      guide: false,
      autoComplete: 'off',
      autoCorrect: 'off',
      autoCapitalize: 'off',
      spellCheck: false,
    },
    customErrorProps: {
      fontSize: CONSTANTS.styles.fontSizes.contentMedium.fontSize,
      marginTop: 0,
    },
    label: 'Personal Annual Income',
  },
});

exports.personalAnnualIncomeSubText = CONSTANTS => ({
  gridProps: {
    key: 'randomKey()',
  },
  personalAnnualIncomeSubText: {
    type: 'layout',
    textOffset: true,
    value: {
      component: 'p',
      props: {
        style: CONSTANTS.styles.fontSizes.contentSmall,
      },
      children: [{
        component: 'div',
        props: {
          style: {
            display: 'inline',
          },
        },
        children: 'Do not include income from others in your household. Stated income will be verified on every application. Your personal income must be verifiable via pay stubs, bank statements, or other records. Alimony, child support, or separate maintenance income need not be revealed if you do not wish to have it considered as a basis for repaying this loan.',
      },
      ],
    },
  },
});

exports.householdAnnualIncome = CONSTANTS => ({
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    household_annual_income: [{
      constraint: 'presence',
      message: '^Your household annual income is required.',
    }, {
      constraint: 'length',
      maximum: 10,
      message: '^Your household annual income must be less than 8 digits in length.'
    }],
  },
  householdAnnualIncome: {
    type: 'maskedinput',
    name: 'household_annual_income',
    placeholder: 'Household Annual Income (Pre-Tax)',
    hasValidations: true,
    createNumberMask: true,
    passProps: {
      mask: 'func:window.testMaskDollarInput',
      guide: false,
    },
    customErrorProps: {
      fontSize: CONSTANTS.styles.fontSizes.contentMedium.fontSize,
      marginTop: 0,
    },
    label: 'Household Annual Income',
  },
});

exports.employmentStatus = selectOptions => ({
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    employment_status: [{
      constraint: 'exclusion',
      within: ['Employment Status',],
      message: '^Your employment status is required.',
    }, {
      constraint: 'length',
      maximum: 30,
    }],
  },
  employmentStatus: {
    type: 'select',
    label: 'Employment Status',
    name: 'employment_status',
    value: 'Employment Status',
    disableOnChange: true,
    customOnChange: 'func:window.selectOnChange',
    passProps: {
      className: '__select_initial'
    },
    options: [{
      label: 'Employment Status',
      value: 'Employment Status',
      disabled: true,
    },].concat(selectOptions.employmentOptions),
  },
});

exports.tenure = selectOptions => ({
  gridProps: {
    key: 'randomKey()',
  },
  tenure: {
    type: 'select',
    label: 'Tenure at Employer',
    value: 'Tenure at Employer',
    name: 'tenure_at_employer',
    disableOnChange: true,
    customOnChange: 'func:window.selectOnChange',
    passProps: {
      className: '__select_initial',
      state: 'isDisabled',
    },
    options: [{
      label: 'Tenure at Employer',
      value: 'Tenure at Employer',
      disabled: true,
    },].concat(selectOptions.tenureOptions),
  },
});

exports.rentOrOwn = selectOptions => ({
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    rent_or_own_home: [{
      constraint: 'exclusion',
      within: ['Rent or Own Home',],
      message: '^Your home ownership status is required.',
    }, {
      constraint: 'length',
      maximum: 30,
    }],
  },
  rentOrOwn: {
    type: 'select',
    label: 'Rent or Own Home',
    name: 'rent_or_own_home',
    value: 'Rent or Own Home',
    disableOnChange: true,
    customOnChange: 'func:window.selectOnChange',
    passProps: {
      className: '__select_initial'
    },
    options: [{
      label: 'Rent or Own Home',
      value: 'Rent or Own Home',
      disabled: true,
    },].concat(selectOptions.homeOptions),
  },
});

exports.mortgage = CONSTANTS => ({
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    rent_or_mortgage_payment: [{
      constraint: 'presence',
      message: '^Your monthly rent or mortgage payment is required.',
    }, {
      constraint: 'length',
      maximum: 14,
    }],
  },
  mortgage: {
    type: 'maskedinput',
    name: 'rent_or_mortgage_payment',
    placeholder: 'Monthly Payment Amount',
    label: 'Monthly Rent / Mortgage Payment',
    createNumberMask: true,
    hasValidations: true,
    passProps: {
      mask: 'func:window.testMaskDollarInput',
      guide: false,
    },
    customErrorProps: {
      fontSize: CONSTANTS.styles.fontSizes.contentMedium.fontSize,
      marginTop: 0,
    },
  },
});

exports.loanPurpose = selectOptions => ({
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    loan_purpose: [{
      constraint: 'exclusion',
      within: ['Loan Purpose',],
      message: '^Your loan purpose is required.',
    }],
  },
  loanPurpose: {
    type: 'select',
    label: 'Loan Purpose',
    value: 'Loan Purpose',
    name: 'loan_purpose',
    disableOnChange: true,
    customOnChange: 'func:window.selectOnChange',
    passProps: {
      className: '__select_initial'
    },
    options: [{
      label: 'Loan Purpose',
      value: 'Loan Purpose',
      disabled: true,
      selected: true,
    },].concat(selectOptions.purposeOptions),
  },
});

exports.maritalStatus = selectOptions => ({
  gridProps: {
    className: 'state_specific_form_element state_WI state_level_one levelOne hideStateField',
    key: 'randomKey()',
  },
  maritalStatus: {
    type: 'select',
    label: 'Marital Status',
    name: 'marital_status',
    value: 'Marital Status',
    disableOnChange: true,
    customOnChange: 'func:window.selectOnChange',
    passProps: {
      className: '__select_initial'
    },
    options: [{
      label: 'Marital Status',
      value: 'Marital Status',
      disabled: true,
    },].concat(selectOptions.maritalOptions),
  },
});

exports.spouseHomeAddress = {
  gridProps: {
    className: 'state_specific_form_element state_level_two state_WI hideStateField',
    key: 'randomKey()',
  },
  spouseHomeAddress: {
    label: 'Spouse\'s Address (If Different)',
    type: 'text',
    name: 'spouse_address_street',
    placeholder: 'Street Address',
    hasValidations: true,
  },
};

exports.spouseLocation = selectOptions => ({
  gridProps: {
    className: 'state_specific_form_element state_level_two state_WI hideStateField',
    key: 'randomKey()',
  },
  spouseLocation: {
    type: 'group',
    name: 'location',
    label: 'Location ',
    groupElements: [{
      type: 'text',
      passProps: {},
      name: 'spouse_address_city',
      hasValidations: true,
      placeholder: 'City',
    },
    {
      type: 'select',
      name: 'spouse_address_state',
      errorIconRight: true,
      disableOnChange: true,
      value: 'State',
      customOnChange: 'func:window.selectOnChange',
      passProps: {
        className: '__select_initial'
      },
      options: [{
        label: 'State',
        value: 'State',
        disabled: true,
      },].concat(selectOptions.stateOptions),
    },
    {
      type: 'text',
      name: 'spouse_address_postal_code',
      placeholder: 'Zip Code',
      hasValidations: true,
      passProps: {
        maxLength: 5,
      },
    },
    ],
  },
});

exports.lineBreak = CONSTANTS => ({
  gridProps: {
    key: 'randomKey()',
  },
  lineBreak: {
    type: 'layout',
    layoutProps: {},
    value: {
      component: 'hr',
      props: {
        style: {
          border: 0,
          borderBottom: '1px solid ' + CONSTANTS.styles.colors.breakColor,
          margin: '1rem 0',
        },
      },
    },
  },
});

exports.password = {
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    password: [{
      constraint: 'presence',
      message: '^Your password is required.',
    }, {
      constraint: 'format',
      pattern: '((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,30})',
      message: '^Please ensure your password meets the following criteria: At least 8 characters in length, at least 1 uppercase letter, at least 1 lowercase letter and at least 1 number.',
    }],
  },
  password: {
    type: 'password',
    name: 'password',
    placeholder: 'Create Your Password',
    hasValidations: true,
    label: 'Password',
    passProps: {},
  },
};

exports.passwordSubText = CONSTANTS => ({
  gridProps: {
    key: 'randomKey()',
  },
  passwordSubText: {
    type: 'layout',
    textOffset: true,
    value: {
      component: 'p',
      props: {
        style: CONSTANTS.styles.fontSizes.contentSmall,
      },
      children: 'Please ensure your password meets the following criteria: At least 8 characters in length, at least 1 uppercase letter, at least 1 lowercase letter and at least 1 number.',
    },
  },
});

exports.confirmPassword = {
  gridProps: {
    key: 'randomKey()',
  },
  validations: {
    password_confirm: [{
      constraint: 'presence',
      message: '^Your password confirmation is required.',
    }],
  },
  confirmPassword: {
    type: 'password',
    name: 'password_confirm',
    label: 'Confirm Password',
    placeholder: 'Confirm Your Password',
    onBlur: 'func:window.validatePasswordConfirmation',
    hasValidations: true,
  },
};

exports.acknowledgeBox = CONSTANTS => ({
  gridProps: {
    key: 'randomKey()',
    responsive: 'isMobile',
    style: {
      margin: '2rem 0',
    },
  },
  validations: {
    consents: [{
      constraint: 'presence',
      message: '^Please check the box to continue.',
    }, {
      constraint: 'inclusion',
      'within': ['on'],
      'message': '^Please check the box to continue.',
    }],
  },
  acknowledgeBox: {
    type: 'checkbox',
    name: 'consents',
    validateOnChange: true,
    customErrorProps: {
      fontSize: CONSTANTS.styles.fontSizes.contentMedium.fontSize,
    },
    layoutProps: {
      size: 'isNarrow',
      offset: 'isOffset3Tablet',
      className: '__cis_check_wrapper',
    },
  },
  acknowledgeBoxText: {
    type: 'layout',
    value: {
      component: 'span',
      props: {
        style: CONSTANTS.styles.fontSizes.contentMedium
      },
      children: [
        {
          component: 'span',
          children: 'By clicking this box you acknowledge that you have received, reviewed and agree to the ',
        },
        {
          component: 'DynamicLayout',
          thisprops: {
            items: ['documentData',],
          },
          props: {
            style: {
              display: 'inline',
            },
            layout: {
              component: 'div',
              bindprops: true,
              props: {
                className: 'consentsList',
                style: {
                  display: 'inline-block',
                },
              },
              children: [{
                component: 'ResponsiveButton',
                bindprops: true,
                thisprops: {
                  children: ['name', 'display',],
                  onclickProps: ['name',],
                },
                props: {
                  onClick: 'func:this.props.createModal',
                  style: {
                    textDecoration: 'underline',
                    display: 'inline',
                  },
                  buttonProps: {
                    color: 'isLink',
                  }
                },
              }, {
                component: 'span',
                bindprops: true,
                comparisonprops: [{
                  left: ['name'],
                  operator: 'dne',
                  right: [''],
                }],
                props: {
                  className: 'lastComma',
                  style: {
                    textDecoration: 'none',
                    width: '0.5rem',
                  },
                },
                children: ', ',
              },
              ]
            },
          },
        },
      ]
    }
  },
});

exports.continueButton = (CONSTANTS, confirmModal) => ({
  gridProps: {
    className: '__cis_submit_wrapper',
    key: 'randomKey()',
  },
  continueButton: {
    type: 'submit',
    value: 'Continue',
    passProps: {
      className: '__cis_arrow_right',
      size: 'isLarge',
      style: CONSTANTS.styles.buttons.approvePrimary,
    },
    confirmModal: {
      title: 'Confirm Your Key Information',
      textContent: [{
        component: 'div',
        children: confirmModal,
        props: {
          style: {
            textAlign: 'left',
          },
        },
      },],
      buttonWrapperProps: {
        className: '__cis_btn-row_wrapper',
        style: {
          marginTop: '1rem',
        },
      },
      yesButtonText: [{
        component: 'span',
        passProps: {
          style: CONSTANTS.styles.buttons.clear,
        },
        children: 'Yes, That\'s Correct',
      },],
      yesButtonProps: {
        buttonProps: {
          buttonStyle: 'isOutlined',
          color: 'isSuccess',
        },
      },
      noButtonText: [{
        component: 'span',
        children: 'No, I Need to Update',
      },],
      noButtonProps: {
        buttonProps: {
          buttonStyle: 'isOutlined',
          color: 'isDanger',
        },
      },
    },
  },
});

exports.checkYourOffersText = CONSTANTS => ({
  gridProps: {
    key: 'randomKey()',
  },
  checkYourOffersText: {
    type: 'layout',
    layoutProps: {
      className: '__cis_submit_info',
    },
    value: {
      component: 'div',
      props: {
        style: {
          display: 'flex',
          alignItems: 'center',
        },
      },
      children: [{
        component: 'p',
        props: {
          style: CONSTANTS.styles.fontSizes.contentMedium,
        },
        children: [{
          component: 'div',
          props: {
            style: {
              display: 'inline',
            },
          },
          children: 'Checking your offers will not impact your credit score.  ',
        },
        {
          component: 'ResponsiveButton',
          props: {
            onClick: 'func:this.props.createModal',
            onclickProps: {
              title: 'How Does This Impact My Credit Score?',
              pathname: '/modal/checking-offers-credit-score',
            },
            style: {
              textDecoration: 'underline',
            },
            buttonProps: {
              color: 'isLink',
            },
          },
          children: 'Learn More',
        },
        ],
      },],
    },
  },
});

exports.auth_checkYourOffersText = CONSTANTS => ({
  gridProps: {
    key: 'randomKey()',
  },
  auth_checkYourOffersText: {
    type: 'layout',
    layoutProps: {
      className: '__cis_submit_info',
    },
    value: {
      component: 'div',
      children: [{
        component: 'p',
        props: {
          style: CONSTANTS.styles.fontSizes.contentMedium,
        },
        children: [{
          component: 'div',
          props: {
            style: {
              display: 'inline',
            },
          },
          children: 'Checking your offers will not impact your credit score.  ',
        },
        {
          component: 'ResponsiveButton',
          props: {
            onClick: 'func:this.props.createModal',
            onclickProps: {
              title: 'How Does This Impact My Credit Score?',
              pathname: '/modal/checking-offers-credit-score',
            },
            style: {
              textDecoration: 'underline',
            },
            buttonProps: {
              color: 'isLink',
            },
          },
          children: 'Learn More',
        },
        ],
      },],
    },
  },
});

exports.hiddenFields = [{
  'form_name': 'requested_loan_amount',
  'form_val': 'request_loan_amount',
},
{
  'form_name': '__loginLastURL',
  'form_static_val': true,
},
{
  form_name: 'credit_report_version',
  form_val: 'credit_report.version',
},
{
  form_name: 'electronic_communications_version',
  form_val: 'electronic_communications.version',
},
{
  form_name: 'privacy_policy_version',
  form_val: 'privacy_policy.version',
},
{
  form_name: 'terms_of_use_version',
  form_val: 'terms_of_use.version',
},
{
  form_name: 'ssn',
  form_val: 'ssn',
},
{
  form_name: 'birth_month',
  form_val: 'birth_month',
},
{
  form_name: 'birth_day',
  form_val: 'birth_day',
},
{
  form_name: 'birth_year',
  form_val: 'birth_year',
},
{
  form_name: 'username',
  form_val: 'username',
},
{
  form_name: 'recaptcha_response',
  form_static_val: '',
},
];