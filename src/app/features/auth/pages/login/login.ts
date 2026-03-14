import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@app/core/api/api.service';
import { BasicToastService } from '@app/shared/components/basic-toast/basic-toast.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
})
export class Login {
  constructor(
    private toast: BasicToastService,
    private api: ApiService,
    private router: Router,
  ) {}

  submit(form: NgForm) {
    if (form.invalid) {
      this.toast.showError('Formulario inválido');
      return;
    }

    this.api.post('users/login', form.value).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => this.toast.showError('Revise sus credenciales'),
    });
  }
}
