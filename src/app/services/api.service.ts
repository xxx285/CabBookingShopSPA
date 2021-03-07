import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers: HttpHeaders;

  constructor(protected http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  getAll(path:string): Observable<any[]> {

    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[])
    )

  }

  getById(path:string, id:number):Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`+'/'+id).pipe(
      map(r => r as any)
    )
  }

  deleteById(path: string, id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${path}`+'/'+id).pipe(
      map(r => r as any)
    )
  }

  create(path: string, resource: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, resource, { headers: this.headers }).pipe(
      map(r => r as any)
    )
  }

  update(path: string, resource: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}${path}`, resource, { headers: this.headers }).pipe(
      map(r => r as any)
    )
  }

}
