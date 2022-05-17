export interface ApiKeys {
  publicKey: string;
  secretKey: string;
}

export interface InitiatePaymentPayload {
  currency?: [];
  amount: number;
  payment_type: string;
  customer_name: string;
  customer_email: string;
  description?: string;
  redirect_url?: string;
  invoice_id?: string;
  callback_url?: string;
}

export interface ProcessPaymentPayload {
  crypto: string;
}
