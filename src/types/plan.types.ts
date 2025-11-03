import { BillingCycle, Prisma } from "../generated";

export interface CreatePlanDTO {
  name: string;
  description?: string;
  price: number;
  billingCycle: BillingCycle;
  features?: PlanFeature[];
  limits?: PlanLimits;
  isActive?: boolean;
}

export interface UpdatePlanDTO {
  name?: string;
  description?: string;
  price?: number;
  billingCycle?: BillingCycle;
  features?: PlanFeature[];
  limits?: PlanLimits;
  isActive?: boolean;
}

export interface PlanFeature {
  name: string;
  description?: string;
  included: boolean;
}

export interface PlanLimits {
  maxProjects: number;
  maxRolesPerProject: number;
  maxCollaboratorsPerProject: number;
  maxWebhooksPerProject: number;
  maxModelsPerEnvironment: number;
  maxLocalesPerEnvironment: number;
  maxRecords: number;
  bandwidthGB: number;
  apiCallsPerMonth: number;
  mediaAssetsCount: number;
}

export interface PlanResponse {
  id: string;
  name: string;
  description?: string;
  price: number;
  billingCycle: BillingCycle;
  features: PlanFeature[];
  limits: PlanLimits;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}