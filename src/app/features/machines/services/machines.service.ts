import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/api/api.service';
import { MessegeResponse, Paginate } from '@app/shared/shared.model';
import { Observable } from 'rxjs';
import { Machine, MachineCreate, MachineUpdate } from '../models/machine.model';

@Injectable({
  providedIn: 'root',
})
export class MachinesService {
  constructor(private api: ApiService) {}

  getMachines(): Observable<Paginate<Machine>> {
    return this.api.get('machines/');
  }

  getMachine(id: string): Observable<Machine> {
    return this.api.get(`machines/${id}`);
  }

  createMachine(machine: MachineCreate): Observable<Machine> {
    return this.api.post('machines/', machine);
  }

  updateMachine(id: string, machine: MachineUpdate): Observable<Machine> {
    return this.api.put(`machines/${id}`, machine);
  }

  deleteMachine(id: string): Observable<MessegeResponse> {
    return this.api.delete(`machines/${id}`);
  }
}
