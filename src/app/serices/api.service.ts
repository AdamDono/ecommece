import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private HttpClient: HttpClient
  ) { }
  
    get<T>(url: string, options?: any): Observable <T> {return this.HttpClient.get<T>(url, options) as Observable<T>;}
  }

