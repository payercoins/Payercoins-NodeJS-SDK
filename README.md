# # Payercoins v1 NodeJS SDK

#### How to use

`npm install payercoins-node-sdk`

```
const Payercoins = require('payercoins-node-sdk');
const payercoins = new Payercoins(PAYERCOINS_PUBLIC_KEY, PAYERCOINS_PRIVATE_KEY);
```

Use TEST API keys for testing and LIVE API keys for production.

NOTE: There are both live and test section and both of them have live and test(public and secret key) respectively.

## Payercoins Method exposed by the sdk

1. Payment

- Initialize Payment
- Verify Payment

2. Payout

- Crypto to crypto
- Crypto to fiat
