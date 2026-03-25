import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IncidentPriorityLevelEnum } from '@features/incident/enum/incident-priority-level.enum';
import { IncidentShiftEnum } from '@features/incident/enum/incident-shift.enum';
import { IncidentStatusEnum } from '@features/incident/enum/incident-status.enum';
import { IncidentService } from '@features/incident/incident.service';
import { IncidentFilterInterface } from '@features/incident/interface/incident-filter.interface';
import { IncidentInterface } from '@features/incident/interface/incident.interface';
import { Modal } from '@shared/components/modal/modal';
import { PaginateInterface } from '@shared/interface/paginate.interface';
import { DateCLPipe } from '@shared/pipes/date-cl-pipe';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
    selector: 'app-incident-list',
    imports: [
        NzPaginationModule,
        NzDividerModule,
        NzTableModule,
        NzTagModule,
        DateCLPipe,
        NzSpaceModule,
        NzSpinModule,
        NzIconModule,
        NzTooltipModule,
        NzButtonModule,
        Modal,
    ],
    templateUrl: './incident-list.html',
})
export class IncidentList implements OnInit {
    // Injecsiones de depenciencias
    private incidentService = inject(IncidentService);
    private notification = inject(NzNotificationService);
    private router = inject(Router);

    // Establecer Signals
    incidents = signal<IncidentInterface[]>([]);
    loading = signal(true);
    total = signal(0);
    page = signal(1);
    limit = signal(10);
    filters = signal<IncidentFilterInterface>({});

    // Enums
    SHIFT_ENUM = IncidentShiftEnum;
    PRIORITY_ENUM = IncidentPriorityLevelEnum;
    STATUS_ENUM = IncidentStatusEnum;

    ngOnInit(): void {
        this.loadIncidents();
    }

    loadIncidents(): void {
        this.loading.set(true);
        this.incidentService.getIncidents(this.page(), this.limit(), this.filters()).subscribe({
            next: (response: PaginateInterface<IncidentInterface>) => {
                this.incidents.set(response.items);
                this.total.set(response.total);
                this.loading.set(false);
            },
            error: () => {
                this.notification.error('Error', 'Error al obtener los incidentes');
                this.loading.set(false);
            },
        });
    }

    goToCreate(): void {
        this.router.navigate(['/machines/create']);
    }

    goToEdit(id: string): void {
        this.router.navigate(['/machines/edit', id]);
    }

    delete(id: string) {
        this.incidentService.deleteIncident(id).subscribe({
            next: () => {
                this.loadIncidents();
                this.notification.success('Success', 'Incidente eliminado');
            },
            error: () => {
                this.notification.error('Error', 'Error al obtener los incidentes');
            },
        });
    }

    onPageChange(newPage: number): void {
        this.page.set(newPage);
        this.loadIncidents();
    }

    onPageSizeChange(newSize: number): void {
        this.limit.set(newSize);
        this.page.set(1);
        this.loadIncidents();
    }
}
