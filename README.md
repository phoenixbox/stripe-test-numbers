![stripe-test-numbers](/../screenshots/public/img/stripe_test_numbers.jpg?raw=true "stripe-test-numbers")
[![wercker status](https://app.wercker.com/status/00cbb52e01ec3663915018964b5cf054/s/master "wercker status")](https://app.wercker.com/project/byKey/00cbb52e01ec3663915018964b5cf054)
---
# stripe-test-numbers

* All the Stripe testing numbers in one handy module.
* Use these to test out Stripe response handling in your app.

* Example
```
// Successful Charge
STN.charges.success.direct
// Declined Charge
STN.charges.error.card_declined
```

* Example in app usage - (JS web)
```
// 1. Token generation on the client
Stripe.setPublishableKey(__STRIPE_PUBLISHABLE_KEY__)
import STN from 'stripe-test-numbers';

const ccParams = {
  cvc: '123',
  exp_month: '01',
  exp_year: '20',
  number: STN.charges.error.card_declined
}

Stripe.card.createToken(ccParams, (status, response) => {
  // Make request to server with response token and user information in payload
})

// 2. Server side request
var Stripe = require('stripe')(config.STRIPE_SECRET_KEY);
const receivedPayload = {
  email: payload.email,
  source: payload.token
}
Stripe.customers.create(receivedPayload, function(err, customer) {
  if (err) {
    console.log('Stripe card_declined error: ', err)
    cb(err)
  } else {
    cb(null, customer.id)
  }
})
```

# API Reference
## Card Numbers
### Domestic
* Card Issuers
	* Visa
	* Mastercard
	* American Express
	* Discover
	* JCB
* Card Types
	* Credit
	* Debit
	* Prepaid
```
STN.cards.domestic.visa.A
STN.cards.domestic.visa.B
STN.cards.domestic.visa.debit
STN.cards.domestic.mastercard.A
STN.cards.domestic.mastercard.debit
STN.cards.domestic.mastercard.prepaid
STN.cards.domestic.amex.A
STN.cards.domestic.amex.B
STN.cards.domestic.discover.A
STN.cards.domestic.discover.B
STN.cards.domestic.jcb.A
STN.cards.domestic.jcb.B
```

### International
* Keyed by supported international country code
* Regions Covered
	* Americas
	* Europe, Middle East & Africa
	* Asia-Pacific
```
// -- Americas --
// Brazil
STN.cards.intl.BR.visa.A
// Canada
STN.cards.intl.CA.visa.A
// Mexico
STN.cards.intl.MX.visa.A

// -- Europe, Middle East & Africa --
// Austria
STN.cards.intl.AT.visa.A
// Belgium
STN.cards.intl.BE.visa.A
// Denmark
STN.cards.intl.DK.visa.A
// Finland
STN.cards.intl.FI.visa.A
// France
STN.cards.intl.FR.visa.A
// Ireland
STN.cards.intl.IE.visa.A
// Italy
STN.cards.intl.IT.visa.A
// Luxembourg
STN.cards.intl.LU.visa.A
// Netherlands
STN.cards.intl.NL.visa.A
// Normway
STN.cards.intl.NO.visa.A
// Portugal
STN.cards.intl.PT.visa.A
// Russia
STN.cards.intl.RU.visa.A
// Spain
STN.cards.intl.ES.visa.A
// Sweden
STN.cards.intl.SE.visa.A
// Switzerland
STN.cards.intl.CH.visa.A
// United Kingdom
STN.cards.intl.GB.visa.A
STN.cards.intl.GB.visa.debit

// -- Asia - Pacific --
// Australia
STN.cards.intl.AU.visa.A
// China
STN.cards.intl.CN.visa.A
// Hong Kong
STN.cards.intl.HK.visa.A
// Japan
STN.cards.intl.JP.visa.A
// New Zealand
STN.cards.intl.NZ.visa.A
// Singapore
STN.cards.intl.SG.visa.A
```

## Charges Responses & Errors
### Success
* `direct`
	* Charge succeeds and funds will be added directly to your available balance (bypassing your pending balance).
* `domestic_pricing`
	* Charge succeeds and domestic pricing is used (other test cards use international pricing). This card is only significant in countries with split pricing.
* `address_line_1_zip_fail`
	*	With default account settings, charge succeeds but address_line1_check and address_zip_check both fail.
* `address_line_1_fail`
	* With default account settings, charge succeeds but address_line1_check fails.
* `address_zip_fail`
	* With default account settings, charge succeeds but address_zip_check fails.
* `address_line_1_zip_unavailable`
	* With default account settings, charge succeeds but address_zip_check and address_line1_check are both unavailable.
* `cvc_check_fail`
	* With default account settings, charge succeeds unless a CVC is entered, in which case cvc_check fails and the charge is
* `attach_ok_charge_fail`
	* 	Attaching this card to a Customer object succeeds, but attempts to charge the customer fail.
* `risk_level_elevated`
	* 	Charge succeeds with a risk_level of elevated and placed into review.
```
STN.charges.success.direct
STN.charges.success.domestic_pricing
STN.charges.success.address_line_1_zip_fail
STN.charges.success.address_line_1_fail
STN.charges.success.address_zip_fail
STN.charges.success.address_line_1_zip_unavailable
STN.charges.success.cvc_check_fail
STN.charges.success.attach_ok_charge_fail
STN.charges.success.risk_level_elevated
```
### Error
* `card_declined`
	* Charge is declined with a card_declined code.
* `card_declined_fraudulent`
	* 	Charge is declined with a card_declined code and a fraudulent reason.
* `incorrect_cvc`
	* Charge is declined with an incorrect_cvc code.
* `expired_card`
	* 	Charge is declined with an expired_card code.
* `processing_error`
	* Charge is declined with a processing_error code.
* `incorrect_number`
	* Charge is declined with an incorrect_number code as the card number fails the Luhn check.
```
STN.charges.error.card_declined
STN.charges.error.card_declined_fraudulent
STN.charges.error.incorrect_cvc
STN.charges.error.expired_card
STN.charges.error.processing_error
STN.charges.error.incorrect_number
```

### Disputes
* Number for simulating a disputed transaction.
```
STN.disputes
```

## Managed Accounts
### Routing
```
STN.managedAccounts.routing.AU
STN.managedAccounts.routing.CA
STN.managedAccounts.routing.GB
STN.managedAccounts.routing.JP
STN.managedAccounts.routing.SG
STN.managedAccounts.routing.HK
STN.managedAccounts.routing.US
```

### Account
```
// Format Example
STN.managedAccounts.account[COUNTRY][RESPONSE_TYPE][ERROR_CODE]
```
* Account numbers by:
	* Supported countries
	* Response status
	* Error codes
		* `no_account`
		* `account_closed`
		* `insufficient_funds`
		* `debit_not_authorized`
		* `invalid_currency`

#### United States & Canada
##### Success
```
STN.managedAccounts.account.USCA.success
```
##### Error
```
STN.managedAccounts.account.USCA.error.no_account
STN.managedAccounts.account.USCA.error.account_closed
STN.managedAccounts.account.USCA.error.insufficient_funds
STN.managedAccounts.account.USCA.error.debit_not_authorized
STN.managedAccounts.account.USCA.error.invalid_currency
```

#### Australia
##### Success
```
STN.managedAccounts.account.AU.success
```
##### Error
```
STN.managedAccounts.account.AU.error.no_account
STN.managedAccounts.account.AU.error.account_closed
STN.managedAccounts.account.AU.error.insufficient_funds
STN.managedAccounts.account.AU.error.debit_not_authorized
STN.managedAccounts.account.AU.error.invalid_currency
```

#### Japan
##### Success
```
STN.managedAccounts.account.JP.success
```
##### Error
```
STN.managedAccounts.account.JP.error.no_account
STN.managedAccounts.account.JP.error.account_closed
STN.managedAccounts.account.JP.error.insufficient_funds
STN.managedAccounts.account.JP.error.debit_not_authorized
STN.managedAccounts.account.JP.error.invalid_currency
```

#### United Kingdom
##### Success
```
STN.managedAccounts.account.GB.success
```
##### Error
```
STN.managedAccounts.account.GB.error.no_account
STN.managedAccounts.account.GB.error.account_closed
STN.managedAccounts.account.GB.error.insufficient_funds
STN.managedAccounts.account.GB.error.debit_not_authorized
STN.managedAccounts.account.GB.error.invalid_currency
```

#### IBAN (Europe)
##### Success
```
STN.managedAccounts.account.IBAN.success
```
##### Error
```
STN.managedAccounts.account.IBAN.error.no_account
STN.managedAccounts.account.IBAN.error.account_closed
STN.managedAccounts.account.IBAN.error.insufficient_funds
STN.managedAccounts.account.IBAN.error.debit_not_authorized
STN.managedAccounts.account.IBAN.error.invalid_currency
```

#### Singapore
##### Success
```
STN.managedAccounts.account.SG.success
```
##### Error
```
STN.managedAccounts.account.SG.error.no_account
STN.managedAccounts.account.SG.error.account_closed
STN.managedAccounts.account.SG.error.insufficient_funds
STN.managedAccounts.account.SG.error.debit_not_authorized
STN.managedAccounts.account.SG.error.invalid_currency
```

#### Hong Kong
##### Success
```
STN.managedAccounts.account.HK.success
```
##### Error
```
STN.managedAccounts.account.HK.error.no_account
STN.managedAccounts.account.HK.error.account_closed
STN.managedAccounts.account.HK.error.insufficient_funds
STN.managedAccounts.account.HK.error.debit_not_authorized
STN.managedAccounts.account.HK.error.invalid_currency
```

### Debit Cards
* Debit card number by response status and card issuer.
#### Success
```
STN.managedAccounts.debit.success.mastercard
STN.managedAccounts.debit.success.visa
```
#### Error
```
STN.managedAccounts.debit.error.visa
```

### Tax Ids
```
STN.managedAccounts.taxIds.success.A
STN.managedAccounts.taxIds.success.nonProfit
STN.managedAccounts.taxIds.error
```

---
Card icon from [ProjectNoun](https://thenounproject.com/term/credit-card/594163/)
