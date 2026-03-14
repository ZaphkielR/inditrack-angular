import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ToastVariant = 'success' | 'warning' | 'error';

export interface IBasicToast {
  message: string;
  variant: ToastVariant;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BasicToastService {
  private toastState = new BehaviorSubject<IBasicToast>({
    message: '',
    variant: 'success',
    visible: false,
  });

  toast$ = this.toastState.asObservable();

  show(message: string, variant: ToastVariant = 'success') {
    this.toastState.next({ message, variant, visible: true });

    setTimeout(() => {
      this.close();
    }, 3000);
  }

  showSuccess(message: string) {
    this.show(message, 'success');
  }

  showWarning(message: string) {
    this.show(message, 'warning');
  }

  showError(message: string) {
    this.show(message, 'error');
  }
  close() {
    const current = this.toastState.getValue();
    this.toastState.next({ ...current, visible: false });
  }
}
