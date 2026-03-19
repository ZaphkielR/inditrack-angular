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

    /**
     * Retrieves a list of machines.
     *
     * @param page The page number.
     * @param limit The number of items per page.
     * @param filters An object containing filters to apply to the query.
     * @returns An observable containing a pagination object with an array of machines.
     */
    getMachines(
        page: number,
        limit: number,
        filters: Object = {},
    ): Observable<PaginateInterface<MachineInterface>> {
        return this.api.get('machines', { page, limit, ...filters });
    }

    /**
     * Retrieves a machine by its ID.
     *
     * @param id The ID of the machine to retrieve.
     * @returns An observable containing the retrieved machine.
     */
    getMachine(id: string): Observable<MachineInterface> {
        return this.api.get(`machines/${id}`);
    }

    /**
     * Creates a new machine.
     *
     * @param id The ID of the machine to create. This parameter is ignored.
     * @param data An object containing the data of the machine to create.
     * @returns An observable containing the created machine.
     */
    createMachine(data: MachineCreateInterface): Observable<MachineInterface> {
        return this.api.post('machines/', data);
    }

    /**
     * Updates a machine.
     *
     * @param id The ID of the machine to update.
     * @param data An object containing the data of the machine to update.
     * @returns An observable containing the updated machine.
     */
    updateMachine(id: string, data: MachineUpdateInterface): Observable<MachineInterface> {
        return this.api.put(`machines/${id}`, data);
    }

    /**
     * Deletes a machine by its ID.
     *
     * @param id The ID of the machine to delete.
     * @returns An observable containing the response of the deletion.
     */
    deleteMachine(id: string): Observable<MessageResponseInterface> {
        return this.api.delete(`machines/${id}`);
    }
}
