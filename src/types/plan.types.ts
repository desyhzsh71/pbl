import { PlanStatus } from "../generated";

// untuk create plan
export interface CreatePlanDTO {
  name: string;
  price: number;
  description?: string;
  bandwidthLimit: number;      // dalam GB
  apiCallLimit: number;         // jumlah calls per bulan
  mediaAssetLimit: number;      // jumlah file
}

// untuk update plan
export interface UpdatePlanDTO {
  name?: string;
  price?: number;
  description?: string;
  bandwidthLimit?: number;
  apiCallLimit?: number;
  mediaAssetLimit?: number;
  status?: PlanStatus;
}

// untuk get plans
export interface PlanQueryParams {
  status?: PlanStatus;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

// response plan dengan stats
export interface PlanWithStats {
  id: number;
  name: string;
  price: number;
  description: string | null;
  bandwidthLimit: number;
  apiCallLimit: number;
  mediaAssetLimit: number;
  status: PlanStatus;
  stats?: {
    totalSubscribers: number;
    activeSubscribers: number;
  };
}