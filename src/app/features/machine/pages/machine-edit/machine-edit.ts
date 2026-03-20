import { Component, inject, OnInit, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MachineInterface } from '@features/machine/interface/machine.interface';
import { MachineService } from '@features/machine/machine.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
    selector: 'app-machine-edit',
    imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule, NzDatePickerModule],
    templateUrl: './machine-edit.html',
})
export class MachineEdit implements OnInit {
    private fb = inject(NonNullableFormBuilder);
    private notification = inject(NzNotificationService);
    private machineService = inject(MachineService);
    private router = inject(Router);
    private route = inject(ActivatedRoute);

    // Establecer Signals
    machine = signal<MachineInterface | {}>({});
    loading = signal(true);

    // Establecer Valores
    id = this.route.snapshot.paramMap.get('id');
    form = this.fb.group({
        name: ['', Validators.required],
        model: ['', Validators.required],
        location: ['', Validators.required],
        installed_at: ['', Validators.required],
    });

    ngOnInit(): void {
        this.loadMachine();
        if (!this.id) return;
        this.machineService.getMachine(this.id).subscribe({
            next: (machine) => {
                this.machine.set(machine);
                this.form.patchValue(machine);
                this.loading.set(false);
            },
            error: () => {
                this.notification.error('Error', 'Error al obtener la maquina');
                this.loading.set(false);
            },
        });
    }

    loadMachine(): void {
        this.loading;
    }

    submit(): void {
        if (this.form.invalid || !this.id) return;

        const value = this.form.getRawValue();

        this.machineService.updateMachine(this.id, value).subscribe({
            next: () => {
                this.notification.success('Success', 'Máquina actualizada con exito');
                this.goToMachineList();
            },
            error: () => {
                this.notification.error('Error', 'No se pudo crear la máquina');
            },
        });
    }

    reset(): void {
        this.form.patchValue(this.machine());
    }

    goToMachineList(): void {
        this.router.navigate(['/machines']);
    }
}
