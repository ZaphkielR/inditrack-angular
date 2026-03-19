export interface MachineCreateInterface {
    name: string;
    model: string;
    location: string;
    criticality_level?: string;
    installed_at?: string;
}
