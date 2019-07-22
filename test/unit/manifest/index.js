const validations = require('./validations.js');
const THEMESETTINGS = require('./themesettings.js');
const randomKey = Math.random;
const texts = require('./texts.js');
const selectOptions = require('./options.js');
const CONSTANTS = require('./constants');
const confirmModal = require('./confirmModal');

module.exports = {
  component: 'ResponsiveForm',
  hasWindowFunc: true,
  thisprops: {
    dynamics: ['dynamic',],
  },
  asyncprops: {
    hiddenFields: ['hiddendata', 'hiddenfields',],
    documentData: ['hiddendata', 'transform', 'organized_docs'],
  },
  props: {
    ref: 'func:window.addRef',
    onSubmit: {
      url: '/application/form_submission',
      options: {
        method: 'POST',
      },
      successCallback: 'func:this.props.loginUser',
      errorCallback: 'func:this.props.reduxRouter.push',
    },
    onChange: 'func:window.applicationOnChange',
    errorCallback: 'func:this.props.reduxRouter.push',
    validations: validations.public,
    blockPageUI: true,
    blockPageUILayout: THEMESETTINGS.settings.client_configurations.blockPageUILayout,
    useDynamicData: true,
    dynamicField: 'formData',
    flattenFormData: true,
    footergroups: false,
    formgroups: [{
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        type: 'group',
        label: 'Name',
        layoutProps: {
          horizontalform: true,
        },
        groupElements: [{
          type: 'text',
          name: 'fname',
          errorIconRight: true,
          placeholder: 'First Name',
          onBlur: true,
          validateOnBlur: true,
          'layoutProps': {
            'innerFormItem': true,
            isExpanded: true,
          },
        },
        {
          type: 'text',
          name: 'lname',
          errorIconRight: true,
          onBlur: true,
          validateOnBlur: true,
          'layoutProps': {
            'innerFormItem': true,
            isExpanded: true,
          },
          placeholder: 'Last Name',
        },
        ],
      },],
    },
    texts.nameText,
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        label: 'Home Address',
        type: 'text',
        name: 'address_street',
        placeholder: 'Street Address',
        errorIconRight: true,
        onBlur: true,
        validateOnBlur: true,
        'layoutProps': {
          horizontalform: true,
        },
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        type: 'group',
        name: 'location',
        label: 'Location ',
        layoutProps: {
          horizontalform: true,
        },
        groupElements: [{
          type: 'text',
          errorIconRight: true,
          passProps: {},
          name: 'address_city',
          onBlur: true,
          validateOnBlur: true,
          placeholder: 'City',
          'layoutProps': {
            'innerFormItem': true,
            isExpanded: true,
          },
        },
        {
          type: 'select',
          name: 'address_state',
          errorIconRight: true,
          value: 'State',
          disableOnChange: true,
          customOnChange: 'func:window.selectOnChange',
          passProps: {
            className: '__select_initial'
          },
          'layoutProps': {
            'innerFormItem': true,
            isExpanded: true,
          },
          options: [{
            label: 'State',
            value: 'State',
            disabled: true,
          },].concat(selectOptions.stateOptions),
        },
        {
          type: 'text',
          name: 'address_postal_code',
          placeholder: 'Zip Code',
          onBlur: true,
          validateOnBlur: true,
          errorIconRight: true,
          passProps: {
            maxLength: 5,
          },
          'layoutProps': {
            'innerFormItem': true,
            isExpanded: true,
          },
        },
        ],
      },],
    },
    texts.locationText,
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        type: 'group',
        name: 'date-of-birth',
        label: 'Date of Birth',
        'layoutProps': {
          horizontalform: true,
        },
        groupElements: [{
          type: 'select',
          name: 'birth_month',
          value: 'Month',
          customOnChange: 'func:window.selectOnChange',
          disableOnChange: true,
          passProps: {
            className: '__select_initial'
          },
          'layoutProps': {
            'innerFormItem': true,
            isExpanded: true,
          },
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
          customOnChange: 'func:window.selectOnChange',
          passProps: {
            className: '__select_initial'
          },
          'layoutProps': {
            'innerFormItem': true,
            isExpanded: true,
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
          customOnChange: 'func:window.selectOnChange',
          passProps: {
            className: '__select_initial'
          },
          value: 'Year',
          'layoutProps': {
            'innerFormItem': true,
            isExpanded: true,
          },
          options: [{
            label: 'Year',
            value: 'Year',
            disabled: true,
          },].concat(selectOptions.yearOptions),
        },
        ],
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        type: 'maskedinput',
        name: 'phone',
        placeholder: 'Personal Phone Number',
        label: 'Phone',
        errorIconRight: true,
        passProps: {
          guide: false,
          mask: 'func:window.phoneNumberFormatter',
          autoComplete: 'off',
          autoCorrect: 'off',
          autoCapitalize: 'off',
          spellCheck: false,
        },
        onBlur: true,
        validateOnBlur: true,
        'layoutProps': {
          horizontalform: true,
        },
        customErrorProps: {
          fontSize: CONSTANTS.styles.fontSizes.contentMedium.fontSize,
          marginTop: 0,
        },
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        type: 'text',
        name: 'username',
        placeholder: 'Personal Email Address',
        onBlur: true,
        validateOnBlur: true,
        label: 'Email',
        errorIconRight: true,
        passProps: {},
        'layoutProps': {
          horizontalform: true,
        },
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        type: 'select',
        label: 'Citizenship',
        name: 'citizenship',
        value: 'Citizenship Status',
        disableOnChange: true,
        customOnChange: 'func:window.selectOnChange',
        passProps: {
          className: '__select_initial'
        },
        'layoutProps': {
          horizontalform: true,
        },
        options: [{
          label: 'Citizenship Status',
          value: 'Citizenship Status',
          disabled: true,
        },].concat(selectOptions.citizenshipOptions),
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        type: 'maskedinput',
        name: 'ssn',
        placeholder: 'Social Security Number',
        label: 'SSN',
        onBlur: true,
        bindprops: true,
        validateOnBlur: true,
        errorIconRight: true,
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
        'layoutProps': {
          horizontalform: true,
        },
      },],
    },
    texts.ssnText,
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        type: 'maskedinput',
        name: 'income',
        onBlur: true,
        validateOnBlur: true,
        placeholder: 'Personal Annual Income (Pre-Tax)',
        errorIconRight: true,
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
        'layoutProps': {
          horizontalform: true,
        },
      },],
    },
    texts.incomeText,
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        type: 'maskedinput',
        name: 'household_annual_income',
        onBlur: true,
        validateOnBlur: true,
        placeholder: 'Household Annual Income (Pre-Tax)',
        errorIconRight: true,
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
        'layoutProps': {
          horizontalform: true,
        },
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        type: 'select',
        label: 'Employment Status',
        name: 'employment_status',
        value: 'Employment Status',
        disableOnChange: true,
        customOnChange: 'func:window.selectOnChange',
        passProps: {
          className: '__select_initial'
        },
        'layoutProps': {
          horizontalform: true,
        },
        options: [{
          label: 'Employment Status',
          value: 'Employment Status',
          disabled: true,
        },].concat(selectOptions.employmentOptions),
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
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
        'layoutProps': {
          horizontalform: true,
        },
        options: [{
          label: 'Tenure at Employer',
          value: 'Tenure at Employer',
          disabled: true,
        },].concat(selectOptions.tenureOptions),
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        type: 'select',
        label: 'Rent or Own Home',
        name: 'rent_or_own_home',
        value: 'Rent or Own Home',
        disableOnChange: true,
        customOnChange: 'func:window.selectOnChange',
        passProps: {
          className: '__select_initial'
        },
        'layoutProps': {
          horizontalform: true,
        },
        options: [{
          label: 'Rent or Own Home',
          value: 'Rent or Own Home',
          disabled: true,
        },].concat(selectOptions.homeOptions),
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        type: 'maskedinput',
        name: 'rent_or_mortgage_payment',
        placeholder: 'Monthly Payment Amount',
        label: 'Monthly Rent / Mortgage Payment',
        createNumberMask: true,
        onBlur: true,
        validateOnBlur: true,
        passProps: {
          mask: 'func:window.testMaskDollarInput',
          guide: false,
        },
        customErrorProps: {
          fontSize: CONSTANTS.styles.fontSizes.contentMedium.fontSize,
          marginTop: 0,
        },
        errorIconRight: true,
        'layoutProps': {
          horizontalform: true,
        },
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        type: 'select',
        label: 'Loan Purpose',
        value: 'Loan Purpose',
        name: 'loan_purpose',
        disableOnChange: true,
        customOnChange: 'func:window.selectOnChange',
        passProps: {
          className: '__select_initial'
        },
        'layoutProps': {
          horizontalform: true,
        },
        options: [{
          label: 'Loan Purpose',
          value: 'Loan Purpose',
          disabled: true,
          selected: true,
        },].concat(selectOptions.purposeOptions),
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
        className: 'state_specific_form_element state_WI state_level_one levelOne hideStateField'
      },
      formElements: [{
        type: 'select',
        label: 'Marital Status',
        name: 'marital_status',
        value: 'Marital Status',
        disableOnChange: true,
        customOnChange: 'func:window.selectOnChange',
        passProps: {
          className: '__select_initial'
        },
        'layoutProps': {
          horizontalform: true,
        },
        options: [{
          label: 'Marital Status',
          value: 'Marital Status',
          disabled: true,
        },].concat(selectOptions.maritalOptions),
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
        className: 'state_specific_form_element state_level_two state_WI hideStateField'
      },
      formElements: [{
        label: 'Spouse\'s Address (If Different)',
        type: 'text',
        name: 'spouse_address_street',
        placeholder: 'Street Address',
        errorIconRight: true,
        onBlur: true,
        validateOnBlur: true,
        'layoutProps': {
          horizontalform: true,
        },
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
        className: 'state_specific_form_element state_level_two state_WI hideStateField'
      },
      formElements: [{
        type: 'group',
        name: 'location',
        label: 'Location ',
        layoutProps: {
          horizontalform: true,
        },
        groupElements: [{
          type: 'text',
          errorIconRight: true,
          passProps: {},
          name: 'spouse_address_city',
          onBlur: true,
          validateOnBlur: true,
          placeholder: 'City',
          'layoutProps': {
            'innerFormItem': true,
            isExpanded: true,
          },
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
          'layoutProps': {
            'innerFormItem': true,
            isExpanded: true,
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
          onBlur: true,
          validateOnBlur: true,
          errorIconRight: true,
          passProps: {
            maxLength: 5,
          },
          'layoutProps': {
            'innerFormItem': true,
            isExpanded: true,
          },
        },
        ],
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
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
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        type: 'password',
        name: 'password',
        placeholder: 'Create Your Password',
        onBlur: true,
        label: 'Password',
        validateOnBlur: true,
        errorIconRight: true,
        passProps: {},
        'layoutProps': {
          horizontalform: true,
        },
      },],
    },
    texts.passwordText,
    {
      gridProps: {
        key: 'randomKey()',
      },
      formElements: [{
        type: 'password',
        name: 'password_confirm',
        label: 'Confirm Password',
        placeholder: 'Confirm Your Password',
        errorIconRight: true,
        onBlur: 'func:window.validatePasswordConfirmation',
        validateOnBlur: true,
        'layoutProps': {
          horizontalform: true,
        },
      },],
    },
    {
      gridProps: {
        key: 'randomKey()',
        responsive: 'isMobile',
        style: {
          margin: '2rem 0',
        },
      },
      formElements: [{
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
      {
        type: 'layout',
        layoutProps: {},
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
      ],
    },
    {
      gridProps: {
        key: 'randomKey()',
        className: '__cis_submit_wrapper',
      },
      formElements: [{
        type: 'submit',
        value: 'Continue',
        passProps: {
          className: '__cis_arrow_right',
          size: 'isLarge',
          style: CONSTANTS.styles.buttons.approvePrimary,
        },
        layoutProps: {
          size: 'isNarrow',
          formItemStyle: {
            display: 'flex',
            justifyContent: 'center',
          },
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
      {
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
      ],
    },
    ],
  },
};