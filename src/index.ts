import Checkout from './checkout';
import * as Types from './utils/types';

/*
 * Payercoins NodeJS SDK
 *
 * Copyright (c) 2022 Payercoins Inc.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

class Payercoins {
  private config: Types.ApiKeys = {
    publicKey: '',
    secretKey: '',
  };

  Checkout: Checkout;

  /**
   * @param {string} publicKey - Your Payercoins public key
   * @param {string} secretKey - Your Payercoins secret key
   * @returns {Payercoins} - Payercoins instance
   */

  constructor(publicKey: string, secretKey: string) {
    this.config.publicKey = publicKey;
    this.config.secretKey = secretKey;
    this.config = { ...this.config, publicKey, secretKey };
    this.Checkout = new Checkout(this.config);
  }
}

export default Payercoins;
export { Types };
