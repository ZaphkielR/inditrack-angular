export interface MachineInterface {
    id: string;
    name: string;
    model: string;
    location?: string;
    installed_at?: string;
    status?: 'Active' | 'Inactive';
    created_at: string;
}
