const CONSTANTS = require('./constants');
let randomKey = Math.random;

module.exports = {
  nameText: {
    gridProps: {
      key: 'randomKey()',
    },
    formElements: [{
      type: 'layout',
      layoutProps: {
        offset: 'isOffset3',
        style: {
          marginTop: '-0.5rem',
        },
      },
      value: {
        component: 'p',
        props: {
          style: CONSTANTS.styles.fontSizes.contentSmall,
        },
        children: 'Please provide your full legal name.',
      },
    }, ],
  },
  locationText: {
    gridProps: {
      key: 'randomKey()',
    },
    formElements: [{
      type: 'layout',
      layoutProps: {
        offset: 'isOffset3',
        style: {
          marginTop: '-0.5rem',
        },
      },
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
        }, ],
      },
    }, ],
  },
  ssnText: {
    gridProps: {
      key: 'randomKey()',
    },
    formElements: [{
      type: 'layout',
      layoutProps: {
        offset: 'isOffset3',
        style: {
          marginTop: '-0.5rem',
        },
      },
      value: {
        component: 'div',
        children: [{
          component: 'p',
          props: {
            style: CONSTANTS.styles.fontSizes.contentSmall,
          },
          children: 'Your SSN is required to pull your credit information.',
        }, ],
      },
    }, ],
  },
  incomeText: {
    gridProps: {
      key: 'randomKey()',
    },
    formElements: [{
      type: 'layout',
      layoutProps: {
        offset: 'isOffset3',
        style: {
          marginTop: '-0.5rem',
        },
      },
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
    }, ],
  },
  rentMortgageText: {
    gridProps: {
      key: 'randomKey()',
    },
    formElements: [{
      type: 'layout',
      layoutProps: {
        offset: 'isOffset3',
        style: {
          marginTop: '-0.5rem',
        },
      },
      value: {
        component: 'div',
        children: [{
          component: 'p',
          props: {
            style: {
              display: 'inline',
            },
          },
        }, ],
      },
    }, ],
  },
  passwordText: {
    gridProps: {
      key: 'randomKey()',
    },
    formElements: [{
      type: 'layout',
      layoutProps: {
        offset: 'isOffset3',
        style: {
          marginTop: '-0.5rem',
        },
      },
      value: {
        component: 'p',
        props: {
          style: CONSTANTS.styles.fontSizes.contentSmall,
        },
        children: 'Please ensure your password meets the following criteria: At least 8 characters in length, at least 1 uppercase letter, at least 1 lowercase letter and at least 1 number.',
      },
    }, ],
  },
};