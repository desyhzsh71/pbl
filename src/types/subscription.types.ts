import { SubscriptionStatus, BillingCycle } from "../generated";

// untuk buat subscription (checkout flow)
export interface CreateSubscriptionDTO {
    planId: string;
    organizationId?: string; // ini untuk organisasi yang mau subscription
    billingCycle?: BillingCycle;
    paymentMethodId?: string; // ini misal ada nyimpan payment dengan metode lain
    paymentChannel?: string; // ini kalau ga nyimpan metode lain, alias menyesuaikan yang ada kayak credit card, e-wallet
    autoRenew?: boolean;
}

// untuk upgrade subscription
export interface UpgradeSubscriptionDTO {
  newPlanId: string;
  effectiveDate?: Date; // memilih mau langsung berlaku atau di akhir aja
}

// untuk cancel subscription
export interface CancelSubscriptionDTO {
  reason?: string;
  cancelImmediately?: boolean;  // (true -> batal langsung) & (false -> batal di akhir setelah masa langganan)
}

// respons dari subscription -> detail paket
export interface SubscriptionResponse {
  id: string;
  userId?: number;
  organizationId?: string;
  planId: string;
  planName: string;
  planPrice: number;
  status: SubscriptionStatus;
  startDate: Date;
  endDate: Date | null;
  autoRenew: boolean;
  lastPaymentDate: Date | null;
  nextPaymentDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

// subscription dengan statik penggunaan
export interface SubscriptionWithUsage extends SubscriptionResponse {
  usage: {
    bandwidthUsed: number;
    bandwidthLimit: number;
    apiCallsUsed: number;
    apiCallsLimit: number;
    mediaAssetsUsed: number;
    mediaAssetsLimit: number;
    projectsUsed: number;
    projectsLimit: number;
    rolesUsed: number;
    rolesLimit: number;
    collaboratorsUsed: number;
    collaboratorsLimit: number;
    webhooksUsed: number;
    webhooksLimit: number;
    modelsUsed: number;
    modelsLimit: number;
    localesUsed: number;
    localesLimit: number;
    recordsUsed: number;
    recordsLimit: number;
  };
  usagePercentage: {
    bandwidth: number;
    apiCalls: number;
    mediaAssets: number;
    projects: number;
  };
}

// respons dri checkout pembayaran
export interface CheckoutResponse {
  subscriptionId: string;
  transactionId: string;
  paymentUrl?: string; // url untuk menyelesaikan pembayaran
  qrCode?: string; // QR code untu pembayaran QRIS
  vaNumber?: string; // untuk nomor virtual account
  amount: number;
  status: string;
  expiresAt: Date; // batas waktu pembayaran
}