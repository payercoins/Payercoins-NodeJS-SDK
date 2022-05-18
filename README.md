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
            currency?: [], //BTC, ETH, USDT(ETH), USDT(TRX)
            amount: 150,
            payment_type: 'crypto', //crypto, fiat
            customer_name: 'John Doe',
            customer_email: 'john_doe@gmail.com'
            description?: 'this is a test payment',
            redirect_url?: string,
            invoice_id?: string,
            callback_url?: string, //optional
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
