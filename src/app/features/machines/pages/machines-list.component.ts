import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachinesService } from '../services/machines.service';
import { Machine } from '../models/machine.model';

@Component({
  selector: 'app-machines-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './machines-list.component.html',
})
export class MachinesListComponent implements OnInit {
  machines = signal<Machine[]>([]);
  loading = signal(true);

  constructor(private machinesService: MachinesService) {}

  ngOnInit() {
    this.loadMachines();
  }

  loadMachines() {
    this.loading.set(true);

    this.machinesService.getMachines().subscribe({
      next: (data) => {
        this.machines.set(data.items);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }
}
