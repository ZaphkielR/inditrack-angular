import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private api: ApiService,
    private router: Router,
  ) {}

  login(email: string, password: string) {
    return this.api.post('login', { email, password });
  }

  logout() {
    return this.api.post('logout', {});
  }

  isLogged() {
    return this.api.get('users/me');
  }
}
