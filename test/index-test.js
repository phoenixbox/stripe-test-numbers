const assert = require('chai').assert;
const STC = require('../index.js')

describe('STC', function() {
  describe('cards', function() {
    describe('visa', function() {
      it('returns first valid card number', () => {
        const number = STC.cards.domestic.visa.A
        assert.equal(number, '4242424242424242')
      })
      it('returns second valid card number', () => {
        const number = STC.cards.domestic.visa.B
        assert.equal(number, '4012888888881881')
      })
      it('returns valid debit card number', () => {
        const number = STC.cards.domestic.visa.debit
        assert.equal(number, '4000056655665556')
      })
    })
    describe('mastercard', function() {
      it('returns first valid card number', () => {
        const number = STC.cards.domestic.mastercard.A
        assert.equal(number, '5555555555554444')
      })
      it('returns valid debit card number', () => {
        const number = STC.cards.domestic.mastercard.debit
        assert.equal(number, '5200828282828210')
      })
      it('returns valid prepaid card number', () => {
        const number = STC.cards.domestic.mastercard.prepaid
        assert.equal(number, '5105105105105100')
      })
    })
    describe('amex', function() {
      it('returns first valid card number', () => {
        const number = STC.cards.domestic.amex.A
        assert.equal(number, '378282246310005')
      })
      it('returns second valid card number', () => {
        const number = STC.cards.domestic.amex.B
        assert.equal(number, '371449635398431')
      })
    })
    describe('discover', function() {
      it('returns first valid card number', () => {
        const number = STC.cards.domestic.discover.A
        assert.equal(number, '6011111111111117')
      })
      it('returns second valid card number', () => {
        const number = STC.cards.domestic.discover.B
        assert.equal(number, '6011000990139424')
      })
    })
    describe('jcb', function() {
      it('returns first valid card number', () => {
        const number = STC.cards.domestic.jcb.A
        assert.equal(number, '3530111333300000')
      })
      it('returns second valid card number', () => {
        const number = STC.cards.domestic.jcb.B
        assert.equal(number, '3566002020360505')
      })
    })
  })
  describe('intl', function() {
    describe('Brazil', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.BR.visa.A
          assert.equal(number, '4000000760000002')
        })
      })
    })
    describe('Canda', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.CA.visa.A
          assert.equal(number, '4000001240000000')
        })
      })
    })
    describe('Mexico', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.MX.visa.A
          assert.equal(number, '4000004840000008')
        })
      })
    })
    describe('Austria', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.AT.visa.A
          assert.equal(number, '4000000400000008')
        })
      })
    })
    describe('Belgium', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.BE.visa.A
          assert.equal(number, '4000000560000004')
        })
      })
    })
    describe('Denmark', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.DK.visa.A
          assert.equal(number, '4000002080000001')
        })
      })
    })
    describe('Finland', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.FI.visa.A
          assert.equal(number, '4000002460000001')
        })
      })
    })
    describe('France', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.FR.visa.A
          assert.equal(number, '4000002500000003')
        })
      })
    })
    describe('Ireland', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.IE.visa.A
          assert.equal(number, '4000003720000005')
        })
      })
    })
    describe('Italy', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.IT.visa.A
          assert.equal(number, '4000003800000008')
        })
      })
    })
    describe('Luxembourg', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.LU.visa.A
          assert.equal(number, '4000004420000006')
        })
      })
    })
    describe('Netherlands', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.NL.visa.A
          assert.equal(number, '4000005280000002')
        })
      })
    })
    describe('Norway', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.NO.visa.A
          assert.equal(number, '4000005780000007')
        })
      })
    })
    describe('Portugal', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.PT.visa.A
          assert.equal(number, '4000006200000007')
        })
      })
    })
    describe('Russian Federation', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.RU.visa.A
          assert.equal(number, '4000006430000009')
        })
      })
    })
    describe('Spain', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.ES.visa.A
          assert.equal(number, '4000007240000007')
        })
      })
    })
    describe('Sweden', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.SE.visa.A
          assert.equal(number, '4000007520000008')
        })
      })
    })
    describe('Switzerland', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.CH.visa.A
          assert.equal(number, '4000007560000009')
        })
      })
    })
    describe('United Kingdom', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.GB.visa.A
          assert.equal(number, '4000008260000000')
        })
      })
      it('returns valid debit card number', () => {
        const number = STC.cards.intl.GB.visa.debit
        assert.equal(number, '4000058260000005')
      })
    })
    describe('Australia', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.AU.visa.A
          assert.equal(number, '4000000360000006')
        })
      })
    })
    describe('China', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.CN.visa.A
          assert.equal(number, '4000001560000002')
        })
      })
    })
    describe('Hong Kong', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.HK.visa.A
          assert.equal(number, '4000003440000004')
        })
      })
    })
    describe('Japan', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.JP.visa.A
          assert.equal(number, '4000003920000003')
        })
      })
    })
    describe('New Zealand', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.NZ.visa.A
          assert.equal(number, '4000005540000008')
        })
      })
    })
    describe('Singapore', function() {
      describe('visa', function() {
        it('returns first valid card number', () => {
          const number = STC.cards.intl.SG.visa.A
          assert.equal(number, '4000007020000003')
        })
      })
    })
  })
  describe('charges', function() {
    describe('success', function() {
      it('direct', () => {
        const number = STC.charges.success.direct
        assert.equal(number, '4000000000000077')
      })
      it('domestic_pricing', () => {
        const number = STC.charges.success.domestic_pricing
        assert.equal(number, '4000000000000093')
      })
      it('address_line_1_zip_fail', () => {
        const number = STC.charges.success.address_line_1_zip_fail
        assert.equal(number, '4000000000000010')
      })
      it('address_line_1_fail', () => {
        const number = STC.charges.success.address_line_1_fail
        assert.equal(number, '4000000000000028')
      })
      it('address_zip_fail', () => {
        const number = STC.charges.success.address_zip_fail
        assert.equal(number, '4000000000000036')
      })
      it('address_line_1_zip_unavailable', () => {
        const number = STC.charges.success.address_line_1_zip_unavailable
        assert.equal(number, '4000000000000044')
      })
      it('cvc_check_fail', () => {
        const number = STC.charges.success.cvc_check_fail
        assert.equal(number, '4000000000000101')
      })
      it('attach_ok_charge_fail', () => {
        const number = STC.charges.success.attach_ok_charge_fail
        assert.equal(number, '400000000000034')
      })
      it('risk_level_elevated', () => {
        const number = STC.charges.success.risk_level_elevated
        assert.equal(number, '4000000000009235')
      })
    })
    describe('error', function() {
      it('card_declined', () => {
        const number = STC.charges.error.card_declined
        assert.equal(number, '4000000000000002')
      })
      it('card_declined_fraudulent', () => {
        const number = STC.charges.error.card_declined_fraudulent
        assert.equal(number, '4100000000000019')
      })
      it('incorrect_cvc', () => {
        const number = STC.charges.error.incorrect_cvc
        assert.equal(number, '4000000000000127')
      })
      it('expired_card', () => {
        const number = STC.charges.error.expired_card
        assert.equal(number, '4000000000000069')
      })
      it('processing_error', () => {
        const number = STC.charges.error.processing_error
        assert.equal(number, '4000000000000119')
      })
      it('incorrect_number', () => {
        const number = STC.charges.error.incorrect_number
        assert.equal(number, '4242424242424241')
      })
    })
  })
  describe('disputes', function() {
    it('returns disputed card number', () => {
      const number = STC.disputes
      assert.equal(number, '4000000000000259')
    })
  })
  describe('managedAccounts', function() {
    describe('routing', function() {
      it('AU', () => {
        const number = STC.managedAccounts.routing.AU
        assert.equal(number, '110000')
      })
      it('CA', () => {
        const number = STC.managedAccounts.routing.CA
        assert.equal(number, '11000-000')
      })
      it('GB', () => {
        const number = STC.managedAccounts.routing.GB
        assert.equal(number, '108800')
      })
      it('JP', () => {
        const number = STC.managedAccounts.routing.JP
        assert.equal(number, '1100000')
      })
      it('SG', () => {
        const number = STC.managedAccounts.routing.SG
        assert.equal(number, '1100-000')
      })
      it('HK', () => {
        const number = STC.managedAccounts.routing.HK
        assert.equal(number, '110-000')
      })
      it('US', () => {
        const number = STC.managedAccounts.routing.US
        assert.equal(number, '110000000')
      })
    })
    describe('account', function() {
      describe('USCA', function() {
        describe('success', function() {
          it('returns success account number', () => {
            const number = STC.managedAccounts.account.USCA.success
            assert.equal(number, '000123456789')
          })
        })
        describe('error', function() {
          it('no_account', () => {
            const number = STC.managedAccounts.account.USCA.error.no_account
            assert.equal(number, '000111111116')
          })
          it('account_closed', () => {
            const number = STC.managedAccounts.account.USCA.error.account_closed
            assert.equal(number, '000111111113')
          })
          it('insufficient_funds', () => {
            const number = STC.managedAccounts.account.USCA.error.insufficient_funds
            assert.equal(number, '000222222227')
          })
          it('debit_not_authorized', () => {
            const number = STC.managedAccounts.account.USCA.error.debit_not_authorized
            assert.equal(number, '000333333335')
          })
          it('invalid_currency', () => {
            const number = STC.managedAccounts.account.USCA.error.invalid_currency
            assert.equal(number, '000444444440')
          })
        })
      })
      describe('AU', function() {
        describe('success', function() {
          it('returns success account number', () => {
            const number = STC.managedAccounts.account.AU.success
            assert.equal(number, '000123456')
          })
        })
        describe('error', function() {
          it('no_account', () => {
            const number = STC.managedAccounts.account.AU.error.no_account
            assert.equal(number, '111111116')
          })
          it('account_closed', () => {
            const number = STC.managedAccounts.account.AU.error.account_closed
            assert.equal(number, '111111113')
          })
          it('insufficient_funds', () => {
            const number = STC.managedAccounts.account.AU.error.insufficient_funds
            assert.equal(number, '222222227')
          })
          it('debit_not_authorized', () => {
            const number = STC.managedAccounts.account.AU.error.debit_not_authorized
            assert.equal(number, '333333335')
          })
          it('invalid_currency', () => {
            const number = STC.managedAccounts.account.AU.error.invalid_currency
            assert.equal(number, '444444440')
          })
        })
      })
      describe('JP', function() {
        describe('success', function() {
          it('returns success account number', () => {
            const number = STC.managedAccounts.account.JP.success
            assert.equal(number, '00012345')
          })
        })
        describe('error', function() {
          it('no_account', () => {
            const number = STC.managedAccounts.account.JP.error.no_account
            assert.equal(number, '11111116')
          })
          it('account_closed', () => {
            const number = STC.managedAccounts.account.JP.error.account_closed
            assert.equal(number, '11111113')
          })
          it('insufficient_funds', () => {
            const number = STC.managedAccounts.account.JP.error.insufficient_funds
            assert.equal(number, '22222227')
          })
          it('debit_not_authorized', () => {
            const number = STC.managedAccounts.account.JP.error.debit_not_authorized
            assert.equal(number, '33333335')
          })
          it('invalid_currency', () => {
            const number = STC.managedAccounts.account.JP.error.invalid_currency
            assert.equal(number, '44444440')
          })
        })
      })
      describe('GB', function() {
        describe('success', function() {
          it('returns success account number', () => {
            const number = STC.managedAccounts.account.GB.success
            assert.equal(number, '00012345')
          })
        })
        describe('error', function() {
          it('no_account', () => {
            const number = STC.managedAccounts.account.GB.error.no_account
            assert.equal(number, '11111116')
          })
          it('account_closed', () => {
            const number = STC.managedAccounts.account.GB.error.account_closed
            assert.equal(number, '11111113')
          })
          it('insufficient_funds', () => {
            const number = STC.managedAccounts.account.GB.error.insufficient_funds
            assert.equal(number, '22222227')
          })
          it('debit_not_authorized', () => {
            const number = STC.managedAccounts.account.GB.error.debit_not_authorized
            assert.equal(number, '33333335')
          })
          it('invalid_currency', () => {
            const number = STC.managedAccounts.account.GB.error.invalid_currency
            assert.equal(number, '44444440')
          })
        })
      })
      describe('IBAN', function() {
        describe('success', function() {
          it('returns success account number', () => {
            const number = STC.managedAccounts.account.IBAN.success
            assert.equal(number, 'DE89370400440532013000')
          })
        })
        describe('error', function() {
          it('no_account', () => {
            const number = STC.managedAccounts.account.IBAN.error.no_account
            assert.equal(number, 'DE62370400440532013001')
          })
          it('account_closed', () => {
            const number = STC.managedAccounts.account.IBAN.error.account_closed
            assert.equal(number, 'DE89370400440532013002')
          })
          it('insufficient_funds', () => {
            const number = STC.managedAccounts.account.IBAN.error.insufficient_funds
            assert.equal(number, 'DE89370400440532013003')
          })
          it('debit_not_authorized', () => {
            const number = STC.managedAccounts.account.IBAN.error.debit_not_authorized
            assert.equal(number, 'DE89370400440532013004')
          })
          it('invalid_currency', () => {
            const number = STC.managedAccounts.account.IBAN.error.invalid_currency
            assert.equal(number, 'DE89370400440532013005')
          })
        })
      })
      describe('SG', function() {
        describe('success', function() {
          it('returns success account number', () => {
            const number = STC.managedAccounts.account.SG.success
            assert.equal(number, '000123456')
          })
        })
        describe('error', function() {
          it('no_account', () => {
            const number = STC.managedAccounts.account.SG.error.no_account
            assert.equal(number, '111111116')
          })
          it('account_closed', () => {
            const number = STC.managedAccounts.account.SG.error.account_closed
            assert.equal(number, '111111113')
          })
          it('insufficient_funds', () => {
            const number = STC.managedAccounts.account.SG.error.insufficient_funds
            assert.equal(number, '222222227')
          })
          it('debit_not_authorized', () => {
            const number = STC.managedAccounts.account.SG.error.debit_not_authorized
            assert.equal(number, '333333335')
          })
          it('invalid_currency', () => {
            const number = STC.managedAccounts.account.SG.error.invalid_currency
            assert.equal(number, '444444440')
          })
        })
      })
      describe('HK', function() {
        describe('success', function() {
          it('returns success account number', () => {
            const number = STC.managedAccounts.account.HK.success
            assert.equal(number, '000123-456')
          })
        })
        describe('error', function() {
          it('no_account', () => {
            const number = STC.managedAccounts.account.HK.error.no_account
            assert.equal(number, '111111-116')
          })
          it('account_closed', () => {
            const number = STC.managedAccounts.account.HK.error.account_closed
            assert.equal(number, '111111-113')
          })
          it('insufficient_funds', () => {
            const number = STC.managedAccounts.account.HK.error.insufficient_funds
            assert.equal(number, '222222-227')
          })
          it('debit_not_authorized', () => {
            const number = STC.managedAccounts.account.HK.error.debit_not_authorized
            assert.equal(number, '333333-335')
          })
          it('invalid_currency', () => {
            const number = STC.managedAccounts.account.HK.error.invalid_currency
            assert.equal(number, '444444-440')
          })
        })
      })
    })
    describe('debit', function() {
      describe('success', function() {
        it('returns a mastercard number', function() {
          const number = STC.managedAccounts.debit.success.mastercard
          assert.equal(number, '5200828282828210')
        })
        it('returns a visa number', function() {
          const number = STC.managedAccounts.debit.success.visa
          assert.equal(number, '4000056655665556')
        })
      })
      describe('error', function() {
        it('returns a visa number', function() {
          const number = STC.managedAccounts.debit.error.visa
          assert.equal(number, '4000056655665564')
        })
      })
    })
    describe('taxIds', function() {
      describe('success', function() {
        it('returns first number', function() {
          const number = STC.managedAccounts.taxIds.success.A
          assert.equal(number, '000000000')
        })
        it('returns a non profit number', function() {
          const number = STC.managedAccounts.taxIds.success.nonProfit
          assert.equal(number, '000000001')
        })
      })
      describe('error', function() {
        it('returns a visa number', function() {
          const number = STC.managedAccounts.taxIds.error
          assert.equal(number, '111111111')
        })
      })
    })
  })
})
