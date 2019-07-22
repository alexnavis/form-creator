'use strict';

const STATES = {
'AK':'AK',
'AL':'AL',
'AZ':'AZ',
'AR':'AR',
'CA':'CA',
'CO':'CO',
'CT':'CT',
'DC':'DC',
'DE':'DE',
'FL':'FL',
'GA':'GA',
'HI':'HI',
'ID':'ID',
'IL':'IL',
'IN':'IN',
'IA':'IA',
'KS':'KS',
'KY':'KY',
'LA':'LA',
'ME':'ME',
'MD':'MD',
'MA':'MA',
'MI':'MI',
'MN':'MN',
'MS':'MS',
'MO':'MO',
'MT':'MT',
'NE':'NE',
'NV':'NV',
'NH':'NH',
'NJ':'NJ',
'NM':'NM',
'NY':'NY',
'NC':'NC',
'ND':'ND',
'OH':'OH',
'OK':'OK',
'OR':'OR',
'PA':'PA',
'RI':'RI',
'SC':'SC',
'SD':'SD',
'TN':'TN',
'TX':'TX',
'UT':'UT',
'VT':'VT',
'VA':'VA',
'WA':'WA',
'WV':'WV',
'WI':'WI',
'WY':'WY'
};

const LOAN_PURPOSE = [
  'House Repairs/Improvements',
  'Personal Expenses',
  'Car Expense/Repair',
  'Vacation',
  'Holiday Spending',
  'Debt Consolidation',
  'Other'
];

const MONTHS = {
  'January': '1',
  'February': '2',
  'March': '3',
  'April': '4',
  'May': '5',
  'June': '6',
  'July': '7',
  'August': '8',
  'September': '9',
  'October': '10',
  'November': '11',
  'December': '12',
};

const EMPLOYMENT = {
  'Employed – Hourly': 'Employed – Hourly',
  'Employed Salaried': 'Employed Salaried',
  'Self-Employed': 'Self-Employed',
  'Unemployed': 'Unemployed',
  'Retired': 'Retired'
};

const CITIZENSHIP = {
  'U.S. Citizen': 'USA Citizen',
  'Permanent Resident': 'Permanent Resident',
  'Foreign Resident': 'Foreign Resident',
};

const HOME = [
  'Renting',
  'Own a Home with Mortgage',
  'Own a Home with no Mortgage',
  'Own a Mobile Home',
  'Living with Relatives'
];


const MILITARY = [
  'Not Active Military',
  'Active Military',
  'Dependent of Active Military',
];

const MARITAL = [
  'Married',
  'Unmarried',
  'Separated, under decree of legal separation',
];

const objectOptions = function (obj) {
  let results = [];
  let keys = Object.keys(obj);
  keys.forEach((key) => {
    let option = {
      label: key,
      value: obj[key],
    };
    results.push(option);
  });
  return results;
};

const rangeOptions = function (rangeArr, labelOption) {
  let results = [];
  rangeArr.forEach((el) => {
    let labelVar = (labelOption) ? el.toString() + ' ' + labelOption : el;
    let option = {
      label: labelVar,
      value: el,
    };
    results.push(option);
  });
  return results;
};

const createRangeArr = function (startNum, endNum) {
  let result = [];
  let i = startNum;
  while (i <= endNum) {
    result.push(i);
    i++;
  }
  return result;
};

const currentYear = new Date().getFullYear();

const monthOptions = (Object.keys(MONTHS).map(key => {
  return {
    label: key,
    value: MONTHS[ key ],
  };
}));

const stateOptions = (Object.keys(STATES).map(key => {
  return {
    label: key,
    value: STATES[ key ],
  };
}));

const employmentOptions = (Object.keys(EMPLOYMENT).map(key => {
  return {
    label: key,
    value: EMPLOYMENT[ key ],
  };
}));

const citizenshipOptions = (Object.keys(CITIZENSHIP).map( key => {
  return {
    label: key, 
    value: CITIZENSHIP[ key ],
  };
}));

const yearOptions = rangeOptions(createRangeArr(1900, 2017).reverse());
const dayOptions = rangeOptions(createRangeArr(1, 31));
const homeOptions = rangeOptions(HOME);
const militaryOptions = rangeOptions(MILITARY);
const purposeOptions = rangeOptions(LOAN_PURPOSE);
const tenureOptions = 
  objectOptions({ '<1 year': 0, '1 year': 1, })
  .concat(rangeOptions(createRangeArr(2, 19), 'years'))
    .concat(objectOptions({ '20+ years': 21, }));
const maritalOptions = rangeOptions(MARITAL);

module.exports = {
  monthOptions: monthOptions,
  stateOptions: stateOptions,
  yearOptions: yearOptions,
  dayOptions: dayOptions,
  employmentOptions: employmentOptions,
  citizenshipOptions: citizenshipOptions,
  homeOptions: homeOptions,
  militaryOptions: militaryOptions,
  purposeOptions: purposeOptions,
  tenureOptions: tenureOptions,
  maritalOptions: maritalOptions,
};
