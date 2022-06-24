import { setupApi, pycApi } from './services/api';

import { ApiKeys, InitiatePaymentPayload, ProcessPaymentPayload } from './utils/types';

class Checkout {
  private apiKeys: ApiKeys = {
    publicKey: '',
    secretKey: '',
  };

  constructor(apiKeys: ApiKeys) {
    this.apiKeys = apiKeys;
  }

  async initiateTransaction(payload: InitiatePaymentPayload): Promise<any> {
    try {
      await setupApi(this.apiKeys.publicKey);
      const response = await pycApi.post('payments/initiate', payload);
      return response.data;
    } catch (err) {
      return err;
    }
  }

  async getInvoiceDetails(payload: string): Promise<any> {
    try {
      await setupApi(this.apiKeys.publicKey);
      const response = await pycApi.get(`payments/details?invoice_id=${payload}`);
      return response.data;
    } catch (err) {
      return err;
    }
  }

  async getPaymentDetailsByReference(url: string): Promise<any> {
    try {
      await setupApi(this.apiKeys.publicKey);
      const response = await pycApi.get(`${url}`);
      return response.data;
    } catch (err) {
      return err;
    }
  }

  async cancelPayment(url: string): Promise<any> {
    try {
      await setupApi(this.apiKeys.publicKey);
      const response = await pycApi.post(`${url}/cancel`);
      return response.data;
    } catch (err) {
      return err;
    }
  }

  async processPayment(url: string, payload: ProcessPaymentPayload): Promise<any> {
    try {
      await setupApi(this.apiKeys.publicKey);
      const response = await pycApi.post(`${url}/process`, payload);
      return response.data;
    } catch (err) {
      return err;
    }
  }

  async confirmPayment(id: string): Promise<any> {
    try {
      await setupApi(this.apiKeys.publicKey);
      const response = await pycApi.get(`payments/verify?invoice_id=${id}`);
      return response.data;
    } catch (err) {
      return err;
    }
  }
}

export default Checkout;
