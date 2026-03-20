import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MachineService } from '@features/machine/machine.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
    selector: 'app-machine-create',
    standalone: true,
    imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule, NzDatePickerModule],
    templateUrl: './machine-create.html',
})
export class MachineCreate {
    private fb = inject(NonNullableFormBuilder);
    private notification = inject(NzNotificationService);
    private machineService = inject(MachineService);
    private router = inject(Router);

    form = this.fb.group({
        name: ['', Validators.required],
        model: ['', Validators.required],
        location: ['', Validators.required],
        installed_at: ['', Validators.required],
    });

    submit(): void {
        if (this.form.invalid) return;

        const value = this.form.getRawValue();

        this.machineService.createMachine(value).subscribe({
            next: () => {
                this.notification.success('Success', 'Máquina creada con exito');
                this.goToMachineList();
            },
            error: () => {
                this.notification.error('Error', 'No se pudo crear la máquina');
            },
        });
    }

    reset(): void {
        this.form.reset();
    }

    goToMachineList(): void {
        this.router.navigate(['/machines']);
    }
}
