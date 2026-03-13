export interface MachineCreate {
  name: string;
  model: string;
  location: string;
  criticality_level?: string;
  installed_at?: string;
}

export interface MachineUpdate {
  name?: string;
  model?: string;
  location?: string;
  criticality_level?: string;
  installed_at?: string;
  status?: string;
}

export interface Machine {
  id: string;
  name: string;
  model: string;
  location: string;
  criticality_level: string;
  installed_at: string;
  status: string;
  created_at: string;
}

export interface MachineFilters {
  status?: string;
  location?: string;
  criticality_level?: string;
  page?: number;
  limit?: number;
  from_date?: string;
  to_date?: string;
}
