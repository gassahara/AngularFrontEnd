import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const SERVER = 'localhost';
const AUTH_API = `http://${SERVER}:5001/`;
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }
    login(username: string, password: string): Observable<any> {
	return this.http.post(AUTH_API + 'search',
			      { 'collection': "users", 'search': { 'user': "user", 'password': "password"}},
			      httpOptions)
    };
	register(username: string, password: string, nombre: string, apellido: string, edad: number, nacimiento: string, sexo: string, estado: string ): Observable<any> {
	  return this.http.post(AUTH_API + 'insert', {
	      'collection': "users",
	      'insertion': {
		  'user': username,
		  'password': password,
		  'nombre': nombre,
		  'apellido': apellido,
		  'edad': edad,
		  'sexo': sexo,
		  'estado': estado
	      }
	  }, httpOptions);
  }
}
