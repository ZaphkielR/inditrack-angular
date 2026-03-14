import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BasicToastService } from './basic-toast.service';

@Component({
  selector: 'app-basic-toast',
  templateUrl: './basic-toast.html',
  standalone: true,
  imports: [NgClass, AsyncPipe],
})
export class BasicToast {
  private toastService = inject(BasicToastService);

  toast$ = this.toastService.toast$;

  close() {
    this.toastService.close();
  }
}
