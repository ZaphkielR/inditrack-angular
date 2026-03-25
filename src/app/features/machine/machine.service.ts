import { inject, Injectable } from '@angular/core';
import { ApiService } from '@core/api/api.service';
import { PaginateInterface } from '@shared/interface/paginate.interface';
import { Observable } from 'rxjs';
import { MachineInterface } from './interface/machine.interface';
import { MachineCreateInterface } from './interface/machine-create.interface';
import { MachineUpdateInterface } from './interface/machine-update.interface';
import { MessageResponseInterface } from '@shared/interface/message-response.interface';

@Injectable({
    providedIn: 'root',
})
export class MachineService {
    private api = inject(ApiService);

    getMachines(
        page: number,
        limit: number,
        filters: Object = {},
    ): Observable<PaginateInterface<MachineInterface>> {
        return this.api.get('machines/', { page, limit, ...filters });
    }

    getMachine(id: string): Observable<MachineInterface> {
        return this.api.get(`machines/${id}`);
    }

    createMachine(data: MachineCreateInterface): Observable<MachineInterface> {
        return this.api.post('machines/', data);
    }

    updateMachine(id: string, data: MachineUpdateInterface): Observable<MachineInterface> {
        return this.api.put(`machines/${id}`, data);
    }

    deleteMachine(id: string): Observable<MessageResponseInterface> {
        return this.api.delete(`machines/${id}`);
    }
}
