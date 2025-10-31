import { SubscriptionStatus, PaymentStatus } from "../generated";

// untuk subscribe plan
export interface SubscribePlanDTO {
  organizationId: string;
  planId: number;
  autoRenewal?: boolean;
  paymentMethodId?: number; // opsional, bisa pilih payment method yang mana
}

// untuk upgrade/downgrade plan
export interface ChangePlanDTO {
  newPlanId: number;
  paymentMethodId?: number;
}

// untuk update subscription
export interface UpdateSubscriptionDTO {
  autoRenewal?: boolean;
  status?: SubscriptionStatus;
}

// untuk cancel subscription
export interface CancelSubscriptionDTO {
  reason?: string;
  cancelImmediately?: boolean; // true = cancel now, false = cancel at end of period
}

// untuk get subscriptions
export interface SubscriptionQueryParams {
  organizationId?: string;
  status?: SubscriptionStatus;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

// response subscription dengan detail lengkap
export interface SubscriptionWithDetails {
  id: number;
  userId: number;
  planId: number;
  startDate: Date;
  endDate: Date;
  autoRenewal: boolean;
  status: SubscriptionStatus;
  paymentStatus: PaymentStatus;
  totalPrice: number;
  plan: {
    id: number;
    name: string;
    price: number;
    description: string | null;
    bandwidthLimit: number;
    apiCallLimit: number;
    mediaAssetLimit: number;
  };
  daysRemaining?: number;
  isExpiringSoon?: boolean; // kurang dari 7 hari
}