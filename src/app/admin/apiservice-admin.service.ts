import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceAdminService {
  
  constructor( private http:HttpClient) { }

apiUrl ='http://localhost:3002/admin';

  //signup
  signup(data:any):Observable<any>{

    console.log(data,'data##');
    
   return this.http.post(`${this.apiUrl}/signup`,data);
 }

 //login

 login(data:any):Observable<any>{
   
   console.log(data,'data##');
   
  return this.http.post(`${this.apiUrl}/login`,data);
}

// get  token
 getToken() : any  {
  if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
     //  Access localStorage here
    return localStorage.getItem('token');
  }
 }

//filiere

Filiere(): Observable<any>{
  return this.http.get(`${this.apiUrl}/filiere`);
}

}
