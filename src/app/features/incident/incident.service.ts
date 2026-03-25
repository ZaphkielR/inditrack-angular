import { inject, Injectable } from '@angular/core';
import { ApiService } from '@core/api/api.service';
import { Observable } from 'rxjs';
import { IncidentInterface } from './interface/incident.interface';
import { PaginateInterface } from '@shared/interface/paginate.interface';
import { MessageResponseInterface } from '@shared/interface/message-response.interface';

@Injectable({
    providedIn: 'root',
})
export class IncidentService {
    private api = inject(ApiService);

    getIncidents(
        page: number,
        limit: number,
        filters: Object = {},
    ): Observable<PaginateInterface<IncidentInterface>> {
        return this.api.get('incidents/', { page, limit, ...filters });
    }

    deleteIncident(id: string): Observable<MessageResponseInterface> {
        return this.api.delete(`incidents/${id}`);
    }
}
