import { IncidentPriorityLevelEnum } from '../enum/incident-priority-level.enum';
import { IncidentShiftEnum } from '../enum/incident-shift.enum';
import { IncidentStatusEnum } from '../enum/incident-status.enum';

export interface IncidentFilterInterface {
    status?: IncidentStatusEnum;
    shift?: IncidentShiftEnum;
    priority?: IncidentPriorityLevelEnum;
    page?: number;
    limit?: number;
    from_date?: string;
    to_date?: string;
}
