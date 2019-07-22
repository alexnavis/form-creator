'use strict';
const THEMESETTINGS = require('../themesettings.js');
let greenButton = '#37b05f';
let backgroundBlue = '#F5F6FB';
let colors = {
  background: '#f2f2f2',
  defaultDarkText: THEMESETTINGS.settings.client_configurations.company_color_body,
  darkGreyText: '#bbb',
  borderColor: '#CACBCD',
  breakColor: '#ccc',
  regGreyText: '#69707a',
  blackText: '#404041',
  primary: THEMESETTINGS.settings.client_configurations.company_color_primary,
  secondary: '#2b39ba',
  highlight: '#68d7e3',
  danger: '#ff6f72',
  warn: '#ffa13b',
  success: '#B4EB9D',
  medYellow: '#E2C756',
  info: '#fff25a',
  pink: '#D88C74',
  mediumGreen: '#65CA60',
  green: '#37b05f',
  red: '#A40000',
};

module.exports = {
  application: colors,
  colors,
  pageContainer: {
    backgroundColor: colors.background,
    padding: '7rem 0 4rem',
  },
  pages: {
    login: {
      backgroundColor: colors.background,
      padding: '100px 0',
    },
  },
  fontSizes: {
    contentSmall: {
      fontSize: '0.8125rem',
    },
    contentMedium: {
      fontSize: '1rem',
      lineHeight: '1.4',
    },
    contentLarge: {
      fontSize: '1.25rem',
      marginBottom: '1.5rem',
    },
  },
  buttons: {
    approve: {
      'backgroundColor': THEMESETTINGS.settings.client_configurations.company_color_primary,
      'color': 'white',
      'borderRadius': '12px',
      border: 'none',
      fontSize: '16px',
      padding: '0 40px',
    },
    clear: {
      'backgroundColor': 'none',
      // 'color': 'black',
      'borderRadius': '12px',
      border: 'none',
      fontSize: '16px',
      padding: '0 40px',
    },
    primary: {
      backgroundColor: THEMESETTINGS.settings.client_configurations.company_color_primary,
      color: 'white',
      // borderRadius: '12px',
      border: 'none',
    },
    verification: {
      borderRadius: '5px',
      minWidth: '150',
    },
    approvePrimary: {
      backgroundColor: THEMESETTINGS.settings.client_configurations.company_color_primary,
      borderRadius: '100px',
      color: 'white',
      border: 'none',
      fontWeight: 400,
      boxShadow: '2px 2px 0.1px 0 rgba(0,0,0,0.05)',
    },
    approveAction: {
      backgroundColor: colors.green,
      borderRadius: '5px',
      color: 'white',
      border: 'none',
      // minWidth: '150'
    },
    rejectAction: {
      backgroundColor: colors.danger,
      borderRadius: '5px',
      color: 'white',
      border: 'none',
      // minWidth: '150'
    },
    linkStyle: {
      padding: '0.7rem 1.44rem',
      fontSize: '1.25rem',
      textDecoration: 'none',
      textAlign: 'center',
    },
  },
  momentFormat: {
    dates: 'MM/DD/YYYY | hh:mm:ssA',
    birthdays: 'MM/DD/YYYY',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
  inputStyle: {
    overflow: 'hidden',
    backgroundColor: '#f5f7fa',
    border: '1px solid #d3d6db',
    borderRadius: 3,
    display: 'inline-flex',
    height: 30,
    lineHeight: '30px',
    // padding: '0px 5px',
    margin: 0,
    width: '100%',
    boxShadow: 'inset 0 1px 2px rgba(17,17,17,.1)',
    flex: 5,
  },
  images: {
    login: {
      // size: 'is128X128',
      src: '/images/dcp/logo.svg',
      style: {
        margin: 'auto',
        marginBottom: 30,
        width: '55%',
      },
    },
  },
  shadows: {
    dcp_card: {
      boxShadow: 'rgba(17, 17, 17, 0.14) 0px 0px 4px 2px',
    },

  },
  cardProps: {
    leftIcon: true,
    headerStyle: {
      boxShadow: 'none',
    },
    iconImage: {
      size: 'is48X48',
      style: {
        cursor: 'pointer',
      },
    },
    headerTitleStyle: {
      fontSize: 20,
      left: -10,
      fontWeight: 'normal',
      position: 'relative',
    },
    cardStyle: {
      boxShadow: 'rgba(17, 17, 17, 0.14) 0px 0px 4px 2px',
      marginBottom: 20,
    },
    cardProps: {
      className: 'dcp_card',
    },
    icon: '/themes/periodicjs.theme.dcp/images/drawer-open.svg',
    iconDown: '/themes/periodicjs.theme.dcp/images/drawer-open.svg',
    iconUp: '/themes/periodicjs.theme.dcp/images/drawer-closed.svg',
  },
};