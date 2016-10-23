# stripe-test-numbers

* All the Stripe testing numbers in one handy module.
* Use these to test out Stripe response handling in your app.

* Example
```
// Successful Charge
STC.charges.success.direct
// Declined Charge
STC.charges.error.card_declined
```

* Example in app usage - (JS web)
```
import STC from 'stripe-test-cards';

const ccParams = {
  cvc: '123',
  exp_month: '01',
  exp_year: '20',
  number: STC.charges.error.card_declined
}

// 1. Token generation on the client
Stripe.card.createToken(ccParams, (status, response) => {
  // Make request to server with response token and user information in payload
})

// 2. Server side request
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
STC.cards.domestic.visa.A
STC.cards.domestic.visa.B
STC.cards.domestic.visa.debit
STC.cards.domestic.mastercard.A
STC.cards.domestic.mastercard.debit
STC.cards.domestic.mastercard.prepaid
STC.cards.domestic.amex.A
STC.cards.domestic.amex.B
STC.cards.domestic.discover.A
STC.cards.domestic.discover.B
STC.cards.domestic.jcb.A
STC.cards.domestic.jcb.B
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
STC.cards.intl.BR.visa.A
// Canada
STC.cards.intl.CA.visa.A
// Mexico
STC.cards.intl.MX.visa.A

// -- Europe, Middle East & Africa --
// Austria
STC.cards.intl.AT.visa.A
// Belgium
STC.cards.intl.BE.visa.A
// Denmark
STC.cards.intl.DK.visa.A
// Finland
STC.cards.intl.FI.visa.A
// France
STC.cards.intl.FR.visa.A
// Ireland
STC.cards.intl.IE.visa.A
// Italy
STC.cards.intl.IT.visa.A
// Luxembourg
STC.cards.intl.LU.visa.A
// Netherlands
STC.cards.intl.NL.visa.A
// Normway
STC.cards.intl.NO.visa.A
// Portugal
STC.cards.intl.PT.visa.A
// Russia
STC.cards.intl.RU.visa.A
// Spain
STC.cards.intl.ES.visa.A
// Sweden
STC.cards.intl.SE.visa.A
// Switzerland
STC.cards.intl.CH.visa.A
// United Kingdom
STC.cards.intl.GB.visa.A
STC.cards.intl.GB.visa.debit

// -- Asia - Pacific --
// Australia
STC.cards.intl.AU.visa.A
// China
STC.cards.intl.CN.visa.A
// Hong Kong
STC.cards.intl.HK.visa.A
// Japan
STC.cards.intl.JP.visa.A
// New Zealand
STC.cards.intl.NZ.visa.A
// Singapore
STC.cards.intl.SG.visa.A
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
STC.charges.success.direct
STC.charges.success.domestic_pricing
STC.charges.success.address_line_1_zip_fail
STC.charges.success.address_line_1_fail
STC.charges.success.address_zip_fail
STC.charges.success.address_line_1_zip_unavailable
STC.charges.success.cvc_check_fail
STC.charges.success.attach_ok_charge_fail
STC.charges.success.risk_level_elevated
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
STC.charges.error.card_declined
STC.charges.error.card_declined_fraudulent
STC.charges.error.incorrect_cvc
STC.charges.error.expired_card
STC.charges.error.processing_error
STC.charges.error.incorrect_number
```

### Disputes
* Number for simulating a disputed transaction.
```
STC.disputes
```

## Managed Accounts
### Routing
```
STC.managedAccounts.routing.AU
STC.managedAccounts.routing.CA
STC.managedAccounts.routing.GB
STC.managedAccounts.routing.JP
STC.managedAccounts.routing.SG
STC.managedAccounts.routing.HK
STC.managedAccounts.routing.US
```

### Account
```
// Format Example
STC.managedAccounts.account[COUNTRY][RESPONSE_TYPE][ERROR_CODE]
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
STC.managedAccounts.account.USCA.success
```
##### Error
```
STC.managedAccounts.account.USCA.error.no_account
STC.managedAccounts.account.USCA.error.account_closed
STC.managedAccounts.account.USCA.error.insufficient_funds
STC.managedAccounts.account.USCA.error.debit_not_authorized
STC.managedAccounts.account.USCA.error.invalid_currency
```

#### Australia
##### Success
```
STC.managedAccounts.account.AU.success
```
##### Error
```
STC.managedAccounts.account.AU.error.no_account
STC.managedAccounts.account.AU.error.account_closed
STC.managedAccounts.account.AU.error.insufficient_funds
STC.managedAccounts.account.AU.error.debit_not_authorized
STC.managedAccounts.account.AU.error.invalid_currency
```

#### Japan
##### Success
```
STC.managedAccounts.account.JP.success
```
##### Error
```
STC.managedAccounts.account.JP.error.no_account
STC.managedAccounts.account.JP.error.account_closed
STC.managedAccounts.account.JP.error.insufficient_funds
STC.managedAccounts.account.JP.error.debit_not_authorized
STC.managedAccounts.account.JP.error.invalid_currency
```

#### United Kingdom
##### Success
```
STC.managedAccounts.account.GB.success
```
##### Error
```
STC.managedAccounts.account.GB.error.no_account
STC.managedAccounts.account.GB.error.account_closed
STC.managedAccounts.account.GB.error.insufficient_funds
STC.managedAccounts.account.GB.error.debit_not_authorized
STC.managedAccounts.account.GB.error.invalid_currency
```

#### IBAN (Europe)
##### Success
```
STC.managedAccounts.account.IBAN.success
```
##### Error
```
STC.managedAccounts.account.IBAN.error.no_account
STC.managedAccounts.account.IBAN.error.account_closed
STC.managedAccounts.account.IBAN.error.insufficient_funds
STC.managedAccounts.account.IBAN.error.debit_not_authorized
STC.managedAccounts.account.IBAN.error.invalid_currency
```

#### Singapore
##### Success
```
STC.managedAccounts.account.SG.success
```
##### Error
```
STC.managedAccounts.account.SG.error.no_account
STC.managedAccounts.account.SG.error.account_closed
STC.managedAccounts.account.SG.error.insufficient_funds
STC.managedAccounts.account.SG.error.debit_not_authorized
STC.managedAccounts.account.SG.error.invalid_currency
```

#### Hong Kong
##### Success
```
STC.managedAccounts.account.HK.success
```
##### Error
```
STC.managedAccounts.account.HK.error.no_account
STC.managedAccounts.account.HK.error.account_closed
STC.managedAccounts.account.HK.error.insufficient_funds
STC.managedAccounts.account.HK.error.debit_not_authorized
STC.managedAccounts.account.HK.error.invalid_currency
```

### Debit Cards
* Debit card number by response status and card issuer.
#### Success
```
STC.managedAccounts.debit.success.mastercard
STC.managedAccounts.debit.success.visa
```
#### Error
```
STC.managedAccounts.debit.error.visa
```

### Tax Ids
```
STC.managedAccounts.taxIds.success.A
STC.managedAccounts.taxIds.success.nonProfit
STC.managedAccounts.taxIds.error
```
