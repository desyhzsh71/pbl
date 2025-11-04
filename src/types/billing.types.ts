export interface CreateBillingAddressDTO {
  fullName: string;
  email: string;
  country: string;
  city: string;
  zipCode?: string;
  state: string;
  address: string;
  company?: string;
}

export interface UpdateBillingAddressDTO {
  fullName?: string;
  email?: string;
  country?: string;
  city?: string;
  zipCode?: string;
  state?: string;
  address?: string;
  company?: string;
}

export interface BillingAddressResponse {
  id: string;
  userId: number;
  fullName: string;
  email: string;
  country: string;
  city: string;
  zipCode: string | null;
  state: string;
  address: string;
  company: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface AddPaymentMethodDTO {
  type: string;
  // untuk credit card
  cardLastFour?: string;
  cardBrand?: string;
  // untuk e-wallet
  walletProvider?: string;
  walletPhone?: string;
  isDefault?: boolean;
}

export interface UpdatePaymentMethodDTO {
  isDefault?: boolean;
  isActive?: boolean;
}

export interface PaymentMethodResponse {
  id: string;
  userId: number;
  type: string;
  cardLastFour?: string | null;
  cardBrand?: string | null;
  walletProvider?: string | null;
  walletPhone?: string | null;
  isDefault: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}