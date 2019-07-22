module.exports = {
  "name": "periodicjs.theme.cis",
  "periodicCompatibility": "1.0.0",
  "author": "Yaw Joseph Etse",
  "url": "http://about.me/yawjosephetse",
  "settings": {
    "consents": {
      "credit_report": {
        "version": "2.0"
      },
      "electronic_communications": {
        "version": "1.0"
      },
      "privacy_policy": {
        "version": "1.0"
      },
      "terms_of_use": {
        "version": "1.0"
      },
      "loan_agreement": {
        "version": "2.0"
      }
    },
    "defaults": {
      "requested_loan_amount": 15000
    },
    "products": {
      "primary": "unsecured-individual-loan",
      "cosigner": "unsecured-guarantor-loan",
      "coborrower": "unsecured-coborrower-loan"
    },
    "client_configurations": {
      "terms": ["60", "48", "36", "24", "12"],
      "company_name": "DigiFi",
      "legal_company_name": "DigiFi, Inc.",
      "logo_url": "/",
      "company_logo": "/logo.svg",
      "company_logo_public": "https://s3-us-west-2.amazonaws.com/promisefinancial.com/cloudfiles/2017/04/17/digifi_logo.png",
      "company_favicon": "/favicon.png",
      "company_address_one": "25 Broadway",
      "company_address_two": "New York, NY 10004",
      "company_color_primary": "#007aff",
      "company_color_secondary": "#007aff",
      "active_states": ["Delaware", "Indiana", "Kentucky", "Maryland", "New Jersey", "Ohio", "Tennessee", "Utah", "and Wisconsin"],
      "use_eoriginal": false,
      "display_rates": true,
      "blockPageUILayout": {
        "component": "div",
        "children": [ {
          "component": "p",
          "props": {
            "style": {
              "color": "black",
              "fontSize": "16px"
            }
          },
          "children": "Processing. Please wait."
        }, {
          "component": "Button",
          "props": {
            "color": "isWhite",
            "buttonStyle": "isOutlined",
            "state": "isLoading",
            "style": {
              "border": "none"
            },
            "children": "Loading"
          }
        }]
      },
      "consents": {
        "credit_report": {
          "version": "2.0",
          "text": ""
        },
        "electronic_communications": {
          "version": "1.0",
          "text": ""
        },
        "privacy_policy": {
          "version": "1.0",
          "text": ""
        },
        "terms_of_use": {
          "version": "1.0",
          "text": ""
        },
        "loan_agreement": {
          "version": "2.0",
          "text": ""
        }
      },
      "contact": {
        "customer_support": {
          "phone_number": "201-645-4805",
          "email": "info@digifi.io",
          "office_hours": "9am - 5pm (Monday - Friday)"
        },
        "technical_support": {
          "phone_number": "201-645-4805",
          "email": "info@digifi.io",
          "office_hours": "9am - 5pm (Monday - Friday)"
        },
        "headquarters": {
          "phone_number": "201-645-4805",
          "email": "info@digifi.io",
          "office_hours": "9am - 5pm (Monday - Friday)"
        }
      },
      "header": {
        "company_color_primary": "#007aff",
        "company_color_secondary": "#007aff",
        "header_background_color_fade_top": "rgb(0,122,255)",
        "header_background_color_fade_bottom":"rgb(0,122,255)",
        "header_primary_text_color":"rgb(255,255,255)",
        "header_button_background_color":"rgb(255,255,255)",
        "header_border_bottom": "1px solid rgb(255,255,255)",
        "header_button_text_color":"rgb(0,122,255)",
        "header_hamburger_color":"rgb(255,255,255)"
      },
      "footer": {
        "disclaimer": "This is the disclaimer",
        "file": "/footer.manifest.js",
        "copyright": "© 2017",
        "company_color_primary": "#007aff",
        "company_color_secondary": "#007aff"
      }
    },
    "plaid": {
      "test": {
        "env": "sandbox",
        "client_name": "Plaid_Testing",
        "public_key": "" // add key for testing
      },
      "development": {
        "env": "sandbox",
        "client_name": "Plaid_Testing",
        "public_key": "" // add key for testing
      },
      "dev_remote": {
        "env": "sandbox",
        "client_name": "Plaid_Testing",
        "public_key": "" // add key for testing
      },
      "qa": {
        "env": "sandbox",
        "client_name": "Plaid_Testing",
        "public_key": "" // add key for testing
      },
      "staging": {
        "env": "development",
        "client_name": "Plaid_Testing",
        "public_key": "" // add key for testing
      },
      "production": {
        "env": "production",
        "client_name": "Plaid@DigiFi",
        "public_key": "" // add key for testing
      }
    },
    "recaptcha": {
      "secret_key": "", // add key for testing
      "site_key": "", // add key for testing
      "timeout": 5000,
      "use_recaptcha": true
    }
  }
}
