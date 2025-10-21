import { ProjectStatus } from "../generated";

export interface CreateProjectDTO {
  name: string;
  description?: string;
  organizationId: string;
  deadline?: Date | string;
}

export interface UpdateProjectDTO {
  name?: string;
  description?: string;
  deadline?: Date | string;
  status?: ProjectStatus;
}

export interface ProjectQueryParams {
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  status?: ProjectStatus;
  organizationId?: string;
}

export interface ProjectResponse {
  id: string;
  name: string;
  description?: string;
  organizationId: string;
  createdBy: number;
  deadline?: Date;
  status: ProjectStatus;
  createdAt: Date;
  organization?: {
    id: string;
    name: string;
  };
}