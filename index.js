module.exports = {
  cards: {
    domestic: {
      visa: {
        A: '4242424242424242',
        B: '4012888888881881',
        debit: '4000056655665556',
      },
      mastercard: {
        A: '5555555555554444',
        debit: '5200828282828210',
        prepaid: '5105105105105100',
      },
      amex: {
        A: '378282246310005',
        B: '371449635398431'
      },
      discover: {
        A: '6011111111111117',
        B: '6011000990139424'
      },
      dinersClub: {
        A: '30569309025904',
        B: '38520000023237'
      },
      jcb: {
        A: '3530111333300000',
        B: '3566002020360505'
      }
    },
    intl: {
      // Brazil
      BR: {
        visa: {
          A: '4000000760000002'
        }
      },
      // Canada
      CA: {
        visa: {
          A: '4000001240000000'
        }
      },
      // Mexico
      MX: {
        visa: {
          A: '4000004840000008'
        }
      },
      // Austria
      AT: {
        visa: {
          A: '4000000400000008'
        }
      },
      // Belgium
      BE: {
        visa: {
          A: '4000000560000004'
        }
      },
      // Denmark
      DK: {
        visa: {
          A: '4000002080000001'
        }
      },
      // Finland
      FI: {
        visa: {
          A: '4000002460000001'
        }
      },
      // France
      FR: {
        visa: {
          A: '4000002500000003'
        }
      },
      // Ireland
      IE: {
        visa: {
          A: '4000003720000005'
        }
      },
      // Italy
      IT: {
        visa: {
          A: '4000003800000008'
        }
      },
      // Luxembourg
      LU: {
        visa: {
          A: '4000004420000006'
        }
      },
      // Netherlands
      NL: {
        visa: {
          A: '4000005280000002'
        }
      },
      // Norway
      NO: {
        visa: {
          A: '4000005780000007'
        }
      },
      // Portugal
      PT: {
        visa: {
          A: '4000006200000007'
        }
      },
      // Russian Federation
      RU: {
        visa: {
          A: '4000006430000009'
        }
      },
      // Spain
      ES: {
        visa: {
          A: '4000007240000007'
        }
      },
      // Sweden
      SE: {
        visa: {
          A: '4000007520000008'
        }
      },
      // Switzerland
      CH: {
        visa: {
          A: '4000007560000009'
        }
      },
      // United Kingdom
      GB: {
        visa: {
          A: '4000008260000000',
          debit: '4000058260000005'
        }
      },
      // Australia
      AU: {
        visa: {
          A: '4000000360000006'
        }
      },
      // China
      CN: {
        visa: {
          A: '4000001560000002'
        }
      },
      // Hong Kong
      HK: {
        visa: {
          A: '4000003440000004'
        }
      },
      // Japan
      JP: {
        visa: {
          A: '4000003920000003'
        }
      },
      // New Zealand
      NZ: {
        visa: {
          A: '4000005540000008'
        }
      },
      // Singapore
      SG: {
        visa: {
          A: '4000007020000003'
        }
      }
    }
  },
  charges: {
    success: {
      // Charge succeeds and funds will be added directly to your available balance (bypassing your pending balance).
      direct: '4000000000000077',
      domestic_pricing: '4000000000000093',
      address_line_1_zip_fail: '4000000000000010',
      address_line_1_fail: '4000000000000028',
      address_zip_fail: '4000000000000036',
      address_line_1_zip_unavailable: '4000000000000044',
      cvc_check_fail: '4000000000000101',
      attach_ok_charge_fail: '400000000000034',
      risk_level_elevated: '4000000000009235',
    },
    error: {
      card_declined: '4000000000000002',
      card_declined_fraudulent: '4100000000000019',
      incorrect_cvc: '4000000000000127',
      expired_card: '4000000000000069',
      processing_error: '4000000000000119',
      incorrect_number: '4242424242424241'
    }
  },
  disputes: '4000000000000259',
  managedAccounts: {
    routing: {
      AU: '110000',
      CA: '11000-000',
      GB: '108800',
      JP: '1100000',
      SG: '1100-000',
      HK: '110-000',
      US: '110000000',
    },
    account: {
      USCA: {
        success: '000123456789',
        error: {
          no_account: '000111111116',
          account_closed: '000111111113',
          insufficient_funds: '000222222227',
          debit_not_authorized: '000333333335',
          invalid_currency: '000444444440'
        }
      },
      AU: {
        success: '000123456',
        error: {
          no_account: '111111116',
          account_closed: '111111113',
          insufficient_funds: '222222227',
          debit_not_authorized: '333333335',
          invalid_currency: '444444440'
        }
      },
      JP: {
        success: '00012345',
        error: {
          no_account: '11111116',
          account_closed: '11111113',
          insufficient_funds: '22222227',
          debit_not_authorized: '33333335',
          invalid_currency: '44444440'
        }
      },
      GB: {
        success: '00012345',
        error: {
          no_account: '11111116',
          account_closed: '11111113',
          insufficient_funds: '22222227',
          debit_not_authorized: '33333335',
          invalid_currency: '44444440'
        }
      },
      IBAN: {
        success: 'DE89370400440532013000',
        error: {
          no_account: 'DE62370400440532013001',
          account_closed: 'DE89370400440532013002',
          insufficient_funds: 'DE89370400440532013003',
          debit_not_authorized: 'DE89370400440532013004',
          invalid_currency: 'DE89370400440532013005'
        }
      },
      SG: {
        success: '000123456',
        error: {
          no_account: '111111116',
          account_closed: '111111113',
          insufficient_funds: '222222227',
          debit_not_authorized: '333333335',
          invalid_currency: '444444440'
        }
      },
      HK: {
        success: '000123-456',
        error: {
          no_account: '111111-116',
          account_closed: '111111-113',
          insufficient_funds: '222222-227',
          debit_not_authorized: '333333-335',
          invalid_currency: '444444-440'
        }
      }
    },
    debit: {
      success: {
        mastercard: '5200828282828210',
        visa: '4000056655665556'
      },
      error: {
        visa: '4000056655665564'
      }
    },
    taxIds: {
      success: {
        A: '000000000',
        nonProfit: '000000001'
      },
      error: '111111111'
    }
  }
}
