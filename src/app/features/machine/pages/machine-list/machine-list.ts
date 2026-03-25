import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MachineFilterInterface } from '@features/machine/interface/machine-filter.interface';
import { MachineInterface } from '@features/machine/interface/machine.interface';
import { MachineService } from '@features/machine/machine.service';
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
    selector: 'app-machine-list',
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
    ],
    templateUrl: './machine-list.html',
})
export class MachineList implements OnInit {
    // Injecsiones de dependencias
    private machineService = inject(MachineService);
    private notification = inject(NzNotificationService);
    private router = inject(Router);

    // Establecer Signals
    machines = signal<MachineInterface[]>([]);
    loading = signal(true);
    total = signal(0);
    page = signal(1);
    limit = signal(10);
    filters = signal<MachineFilterInterface>({});

    ngOnInit(): void {
        this.loadMachines();
    }

    loadMachines(): void {
        this.loading.set(true);
        this.machineService.getMachines(this.page(), this.limit(), this.filters()).subscribe({
            next: (response: PaginateInterface<MachineInterface>) => {
                this.machines.set(response.items);
                this.total.set(response.total);
                this.loading.set(false);
            },
            error: () => {
                this.notification.error('Error', 'Error al obtener las máquinas');
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
        this.machineService.deleteMachine(id).subscribe({
            next: () => {
                this.loadMachines();
                this.notification.success('Success', 'Máquina eliminada');
            },
            error: () => {
                this.notification.error('Error', 'Error al obtener las máquinas');
            },
        });
    }

    onPageChange(newPage: number): void {
        this.page.set(newPage);
        this.loadMachines();
    }

    onPageSizeChange(newSize: number): void {
        this.limit.set(newSize);
        this.page.set(1);
        this.loadMachines();
    }
}
