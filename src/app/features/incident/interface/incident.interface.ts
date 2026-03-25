import { IncidentPriorityLevelEnum } from '../enum/incident-priority-level.enum';
import { IncidentShiftEnum } from '../enum/incident-shift.enum';
import { IncidentStatusEnum } from '../enum/incident-status.enum';

export interface IncidentInterface {
    id: string;
    machine_id: string;
    description: string;
    shift: IncidentShiftEnum;
    priority_level: IncidentPriorityLevelEnum;
    status: IncidentStatusEnum;
    resolved_at?: string;
    created_at: string;
}
