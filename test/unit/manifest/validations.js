const options = require('./options');
const fname = {
  'name': 'fname',
  'constraints': {
    'fname': {
      presence: {
        message: '^Your first name is required.',
      },
      length: { maximum: 30, },
    },
  },
},
  lname = {
    'name': 'lname',
    'constraints': {
      'lname': {
        presence: {
          message: '^Your last name is required.',
        },
        length: { maximum: 30, },
      },
    },
  },
  address_street = {
    'name': 'address_street',
    'constraints': {
      'address_street': {
        presence: {
          message: '^Your home address is required.',
        },
        length: { maximum: 100, },
      },
    },
  },
  address_city = {
    'name': 'address_city',
    'constraints': {
      'address_city': {
        presence: {
          message: '^Your home city is required.',
        },
        length: { maximum: 30, },
      },
    },
  },
  address_state = {
    'name': 'address_state',
    'constraints': {
      'address_state': {
        exclusion: {
          within: ['State',],
          message: '^Your home state is required.',
        },
        length: { maximum: 30, },
      },
    },
  },
  address_postal_code = {
    'name': 'address_postal_code',
    'constraints': {
      'address_postal_code': {
        presence: {
          message: '^Your home ZIP Code is required.',
        },
        numericality: {
          onlyInteger: true,
          message: '^Your ZIP Code must be 5 characters in length.',
        },
        length: {
          is: 5,
          message: '^Your ZIP Code must be 5 characters in length.',
        },
      },
    },
  },
  birth_month = {
    'name': 'birth_month',
    'constraints': {
      'birth_month': {
        exclusion: {
          within: ['Month',],
          message: '^Your birth month is required.',
        },
      },
    },
  },
  birth_day = {
    'name': 'birth_day',
    'constraints': {
      'birth_day': {
        exclusion: {
          within: ['Day',],
          message: '^Your birth day is required.',
        },
      },
    },
  },
  birth_year = {
    'name': 'birth_year',
    'constraints': {
      'birth_year': {
        exclusion: {
          within: ['Year',],
          message: '^Your birth year is required.',
        },
      },
    },
  },
  phone = {
    'name': 'phone',
    'constraints': {
      'phone': {
        presence: {
          message: '^Your phone number is required.',
        },
        length: {
          is: 14,
          message: '^Your phone number must be 10 characters in length.',
        },
      },
    },
  },
  username = {
    'name': 'username',
    'constraints': {
      'username': {
        email: {
          message: '^A valid email address is required.',
        },
        presence: {
          message: '^Your email address is required.',
        },
        length: { maximum: 100, },
      },
    },
  },
  citizenship = {
    'name': 'citizenship',
    'constraints': {
      'citizenship': {
        exclusion: {
          within: ['Citizenship Status',],
          message: '^Your citizenship status is required.',
        },
      },
    },
  },
  ssn = {
    'name': 'ssn',
    'constraints': {
      'ssn': {
        presence: {
          message: '^Your SSN is required.',
        },
        length: {
          is: 11,
          message: '^Your SSN must be 9 characters in length.',
        },
      },
    },
  },
  income = {
    'name': 'income',
    'constraints': {
      'income': {
        presence: {
          message: '^Your annual income is required.',
        },
        length: {
          maximum: 10,
          message: '^Your annual income must be less than 8 digits in length.'
        },
      },
    },
  },
  household_annual_income = {
    'name': 'household_annual_income',
    'constraints': {
      'household_annual_income': {
        presence: {
          message: '^Your household annual income is required.',
        },
        length: {
          maximum: 10,
          message: '^Your household annual income must be less than 8 digits in length.'
        },
      },
    },
  },
  employment_status = {
    'name': 'employment_status',
    'constraints': {
      'employment_status': {
        exclusion: {
          within: ['Employment Status',],
          message: '^Your employment status is required.',
        },
        length: { maximum: 30, },
      },
    },
  },
  tenure_at_employer = {
    'name': 'tenure_at_employer',
    'constraints': {
      'tenure_at_employer': {
        'presence': true,
      },
    },
  },
  rent_or_own_home = {
    'name': 'rent_or_own_home',
    'constraints': {
      'rent_or_own_home': {
        exclusion: {
          within: ['Rent or Own Home',],
          message: '^Your home ownership status is required.',
        },
        length: { maximum: 30, },
      },
    },
  },
  rent_or_mortgage_payment = {
    'name': 'rent_or_mortgage_payment',
    'constraints': {
      'rent_or_mortgage_payment': {
        presence: {
          message: '^Your monthly rent or mortgage payment is required.',
        },
        length: { maximum: 14, },
      },
    },
  },
  loan_purpose = {
    'name': 'loan_purpose',
    'constraints': {
      'loan_purpose': {
        exclusion: {
          within: ['Loan Purpose',],
          message: '^Your loan purpose is required.',
        },
      },
    },
  },
  militarystatus = {
    'name': 'militarystatus',
    'constraints': {
      'militarystatus': {
        exclusion: {
          within: ['Military Status',],
          message: '^Your military status is required.',
        },
        length: { maximum: 30, },
      },
    },
  },
  consents = {
    'name': 'consents',
    'constraints': {
      'consents': {
        presence: {
          message: '^Please check the box to continue.',
        },
        'inclusion': {
          'within': ['on'],
          'message': '^Please check the box to continue.',
        },
      },
    },
  },
  password = {
    'name': 'password',
    'constraints': {
      'password': {
        presence: {
          message: '^Your password is required.',
        },
        format: {
          pattern: '((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,30})',
          message: '^Please ensure your password meets the following criteria: At least 8 characters in length, at least 1 uppercase letter, at least 1 lowercase letter and at least 1 number.',
        },
      },
    },
  },
  password_confirm = {
    'name': 'password_confirm',
    'constraints': {
      'password_confirm': {
        presence: {
          message: '^Your password confirmation is required.',
        },
      },
    },
  };

module.exports = {
  public: [
    fname, lname, address_street, address_city, address_state, address_postal_code, birth_month, birth_day, birth_year, phone, username, citizenship, ssn, income, household_annual_income, employment_status, rent_or_own_home, rent_or_mortgage_payment, loan_purpose, password, password_confirm, consents,
  ],
  auth: [
    fname, lname, address_street, address_city, address_state, address_postal_code, phone, citizenship, income, household_annual_income, employment_status, rent_or_own_home, rent_or_mortgage_payment, loan_purpose, consents,
  ],
};
