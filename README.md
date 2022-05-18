### Payercoins v1 NodeJS SDK

#### How to use

`npm install payercoins-node-sdk`

```js
const Payercoins = require('payercoins-node-sdk');

const payercoins = new Payercoins(PAYERCOINS_PUBLIC_KEY, PAYERCOINS_PRIVATE_KEY);
```

Use TEST API keys for testing and LIVE API keys for production.

NOTE: There are both live and test section and both of them have live and test(public and secret key) respectively.

## Payercoins Method exposed by the sdk

1. Accept Payment

- Initialize Payment
- Verify Payment

2. Payout

- Crypto to crypto (Coming soon)
- Crypto to fiat (Coming soon)

## Accept Crypto Payment

`Initialize Payment`

This describes how to allow your customers to initiate payments transaction transfer.

```js
const Payercoins = require('payercoins-node-sdk');

const payercoins = new Payercoins(PAYERCOINS_PUBLIC_KEY, PAYERCOINS_PRIVATE_KEY);

const initiatePayment = async () => {
    try {
        const initiate_payment_payload = {
            currency?: 'ethereum', //ethereum, bitcoin, usdt-eth. If not provided, the default activated currency type will be used.
            amount: 150,
            payment_type: 'crypto', //crypto, fiat
            customer_name: 'John Doe', // this is the customer name
            customer_email: 'john_doe@gmail.com' // this is the customer email
            description?: 'this is a test payment', // this is the payment description
            redirect_url?: string, // optional
            invoice_id?: string, // optional - unique identifier for your payment and minLength 8, else we will automatically generate one
            callback_url?: string, //optional. This is the url where the customer will be redirected to after payment is completed.
        }

        const response = await payercoins.Checkout.initiateTransaction(initiate_payment_payload);

        console.log(response);
    } catch(error) {
        console.log(error);
    }
}
```

`Confirm Payment`

This describes how to allow you confirm your customers payment transaction transfer after payment is made.

```js
const Payercoins = require('payercoins-node-sdk');

const payercoins = new Payercoins(PAYERCOINS_PUBLIC_KEY, PAYERCOINS_PRIVATE_KEY);

const confirmPayment = async () => {
  try {
    const confirm_payment_payload = {
      invoice_id: 'invoice_id', //id generate when you initiate payment
    };

    const response = await payercoins.Checkout.confirmPayment(confirm_payment_payload);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

`Fetch Invoice Details`

This describes how to allow you process your customers payment transaction transfer after payment is made.

```js
const Payercoins = require('payercoins-node-sdk');

const payercoins = new Payercoins(PAYERCOINS_PUBLIC_KEY, PAYERCOINS_PRIVATE_KEY);

const fetchInvoiceDetails = async () => {
  try {
    const invoice_details_payload = {
      invoice_id: 'invoice_id', //id generate when you initiate payment
    };

    const response = await payercoins.Checkout.getInvoiceDetails(invoice_details_payload);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```
