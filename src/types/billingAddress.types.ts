export interface CreateBillingAddressDTO {
  fullName: string;
  email: string;
  country: string;
  city: string;
  state: string; 
  zip: string;
  address: string;
  company?: string;
}

export interface UpdateBillingAddressDTO {
  fullName?: string;
  email?: string;
  country?: string;
  city?: string;
  state?: string;
  zip?: string;
  address?: string;
  company?: string;
}

export interface BillingAddressResponse {
  id: number;
  userId: number;
  fullName: string;
  email: string;
  country: string;
  city: string;
  state: string;
  zip: string;
  address: string;
  company: string | null;
  createdAt: Date;
  updatedAt: Date;
}
