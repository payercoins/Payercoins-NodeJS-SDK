![Logo](./src/images/Payercoins%20Logo.png)

### Payercoins v1 NodeJS SDK

#### How to use

`npm install payercoins-node-sdk`

```js
const Payercoins = require('payercoins-node-sdk');

const payercoins = new Payercoins(PAYERCOINS_PUBLIC_KEY, PAYERCOINS_SECRET_KEY);
```

Use TEST API keys for testing and LIVE API keys for production.

NOTE: There are both live and test section and both of them have live and test(public and secret key) respectively.

## Payercoins Method exposed by the sdk

1. Accept Payment

- Initialize Payment
- Verify Payment

2. Fetch Payment

- Fetch Invoice details
- Fetch Payment details by Reference ID

3. Cancel Payment

- Crypto to crypto (Coming soon)
- Crypto to fiat (Coming soon)

## Accept Crypto Payment

`Initialize Payment`

This describes how to allow your customers to initiate payments transaction transfer.

```js
const Payercoins = require('payercoins-node-sdk');

const payercoins = new Payercoins(PAYERCOINS_PUBLIC_KEY, PAYERCOINS_SECRET_KEY);

const initiatePayment = async () => {
    try {
        const initiate_payment_payload = {
            currency?: ['ethereum'], //ethereum, bitcoin, usdt-eth. If not provided, the default activated currency type will be used. i.e ['ethereum', 'bitcoin', 'usdt-trx']
            amount: 150,
            payment_type: 'api', //api, donation
            customer_name: 'John Doe', // this is the customer name
            customer_email: 'john_doe@gmail.com', // this is the customer email
            description: 'this is a test payment', // this is the payment description
            redirect_url?: string, // optional
            invoice_id?: string, // optional - unique identifier for your payment and minLength 8, else we will automatically generate one
            callback_url: 'your-preferred-callback-url', //optional. This is the url where the customer will be redirected to after payment is completed.
        }

        const response = await payercoins.Checkout.initiateTransaction(initiate_payment_payload);

        console.log(response);
    } catch(error) {
        console.log(error);
    }
}
```

## Fetch Payment

`Fetch Invoice Details`

This describes how to allow your customers to fetch payments details by invoice_id.

```js
const Payercoins = require('payercoins-node-sdk');

const payercoins = new Payercoins(PAYERCOINS_PUBLIC_KEY, PAYERCOINS_SECRET_KEY);

const fetchDetailsInvoice = async () => {
  try {
    const payload = ''; // invoice_id
    const response = await payercoins.Checkout.getInvoiceDetails(payload);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

`Fetch Payment Details By Reference`

This describes how to allow your customers to fetch payments details by reference.

```js
const Payercoins = require('payercoins-node-sdk');

const payercoins = new Payercoins(PAYERCOINS_PUBLIC_KEY, PAYERCOINS_SECRET_KEY);

const fetchPaymentDetailsByReference = async () => {
  try {
    const url = ''; // url
    const response = await payercoins.Checkout.getPaymentDetailsByReference(url);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

`Cancel Payment`

This describes how to allow your customers to cancel payments.

```js
const Payercoins = require('payercoins-node-sdk');

const payercoins = new Payercoins(PAYERCOINS_PUBLIC_KEY, PAYERCOINS_SECRET_KEY);

const cancelPayment = async () => {
  try {
    const url = ''; // url
    const response = await payercoins.Checkout.cancelPayment(url);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

`Process Payment`

```js
const Payercoins = require('payercoins-node-sdk');

const payercoins = new Payercoins(PAYERCOINS_PUBLIC_KEY, PAYERCOINS_SECRET_KEY);

const processPayment = async () => {
  try {
    const url = ``; // url
    const process_payment_payload = {
      crypto: 'string', // uuid of crypto
    };
    const response = payercoins.Checkout.processPayment(url, process_payment_payload);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

`Confirm Payment`

This describes how to allow you confirm your customers payment transaction transfer after payment is made.

```js
const Payercoins = require('payercoins-node-sdk');

const payercoins = new Payercoins(PAYERCOINS_PUBLIC_KEY, PAYERCOINS_SECRET_KEY);

const confirmPayment = async () => {
  try {
    const confirm_payment_payload = "invoice_id", //id generate when you initiate payment

    const response = await payercoins.Checkout.confirmPayment(confirm_payment_payload);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```
