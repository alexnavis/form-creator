'use strict';
const formatFields = require('./formatFields');
const CONSTANTS = require('./constants');

module.exports = [
  {
    component: 'Columns',
    props: {
      responsive: 'isMobile',
      style: {
        borderBottom: '1px solid ' + CONSTANTS.styles.colors.breakColor,
        padding: '0.5rem 0',
        margin: 0,
        
      },
    },
    children: [
      {
        component: 'Column',
        props: {
          size: 'isOneThird',
        },
        children: 'Full Name',
      },
      {
        component: 'Column',
        children: formatFields.combineFields(
          [
            ['dynamic', 'formData', 'fname', ],
            ['dynamic', 'formData', 'lname', ],
          ], ' '),
      },
    ],
  },
  {
    component: 'Columns',
    props: {
      responsive: 'isMobile',
      style: {
        borderBottom: '1px solid ' + CONSTANTS.styles.colors.breakColor,
        padding: '0.5rem 0',
        margin: 0,
      },
    },
    children: [
      {
        component: 'Column',
        props: {
          size: 'isOneThird',
        },
        children: 'Phone',
      },
      {
        component: 'Column',
        children: [
          {
            component: 'div',
            thisprops: {
              children: ['dynamic', 'formData', 'phone', ],
            },
          },
          {
            component: 'div',
            thisprops: {
              phone: ['dynamic', 'formData', 'phone', ],
            },
            comparisonprops: [
              {
                left: ['phone', ],
                operation: 'dne',
                right: '',
              },
            ],
            props: {
              style: CONSTANTS.styles.fontSizes.contentSmall,
            },
            children: 'Please ensure that this is your personal phone number',
          },
        ],
      },
    ],
  },
  {
    component: 'Columns',
    props: {
      responsive: 'isMobile',
      style: {
        borderBottom: '1px solid ' + CONSTANTS.styles.colors.breakColor,
        padding: '0.5rem 0',
        margin: 0,
      },
    },
    children: [
      {
        component: 'Column',
        props: {
          size: 'isOneThird',
        },
        children: 'Email',
      },
      {
        component: 'Column',
        children: [
          {
            component: 'div',
            thisprops: {
              children: ['dynamic', 'formData', 'username', ],
            },
          },
          {
            component: 'div',
            thisprops: {
              username: ['dynamic', 'formData', 'username', ],
            },
            comparisonprops: [
              {
                left: ['username', ],
                operation: 'dne',
                right: '',
              },
            ],
            props: {
              style: CONSTANTS.styles.fontSizes.contentSmall,
            },
            children: 'Please ensure that this is your personal email address',
          },
        ],
      },
    ],
  },
  {
    component: 'Columns',
    props: {
      responsive: 'isMobile',
      style: {
        borderBottom: '1px solid ' + CONSTANTS.styles.colors.breakColor,
        padding: '0.5rem 0',
        margin: 0,
      },
    },
    children: [
      {
        component: 'Column',
        props: {
          size: 'isOneThird',
        },
        children: 'Date of Birth',
      },
      {
        component: 'Column',
        props: {
          size: 'isOneThird',
        },
        children: formatFields.combineFields([
          ['dynamic', 'formData', 'birth_month', ],
          ['dynamic', 'formData', 'birth_day', ],
          ['dynamic', 'formData', 'birth_year', ],
        ], '/'),
      },
    ],
  },
  {
    component: 'Columns',
    props: {
      responsive: 'isMobile',
      style: {
        borderBottom: '1px solid ' + CONSTANTS.styles.colors.breakColor,
        padding: '0.5rem 0',
        margin: 0,
      },
    },
    children: [
      {
        component: 'Column',
        props: {
          size: 'isOneThird',
        },
        children: 'SSN',
      },
      {
        component: 'Column',
        thisprops: {
          children: ['dynamic', 'formData', 'ssn', ],
        },
      },
    ],
  },
  {
    component: 'Columns',
    props: {
      responsive: 'isMobile',
      style: {
        padding: '0.5rem 0',
        margin: 0,
      },
    },
    children: [
      {
        component: 'Column',
        props: {
          size: 'isOneThird',
        },
        children: 'Annual Income',
      },
      {
        component: 'Column',
        children: [
          {
            component: 'div',
            thisprops: {
              children: ['dynamic', 'formData', 'income', ],
            },
          },
          {
            component: 'div',
            thisprops: {
              income: ['dynamic', 'formData', 'income', ],
            },
            comparisonprops: [
              {
                left: ['income', ],
                operation: 'dne',
                right: '',
              },
            ],
            props: {
              style: CONSTANTS.styles.fontSizes.contentSmall,
            },
            children: 'Please ensure this is your personal pre-tax income. Do not include income from others in your household. Stated income will be verified on every application. Your personal income must be verifiable via pay stubs, bank statements, or other records.',
          },
        ],
      },
    ],
  },
]; 