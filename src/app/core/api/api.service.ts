import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;
  private options = { withCredentials: true };

  constructor(private http: HttpClient) {}

  get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}/`, {
      ...this.options,
      params,
    });
  }

  patch<T, B>(url: string, body: B): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}/${url}`, body, this.options);
  }

  post<T, B>(url: string, body: B): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${url}`, body, this.options);
  }

  put<T, B>(url: string, body: B): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${url}`, body, this.options);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${url}`, this.options);
  }
}
