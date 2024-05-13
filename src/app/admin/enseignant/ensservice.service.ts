import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnsserviceService {

  constructor( private http : HttpClient) { }

// connect frontend to backend 

apiUrl ='http://localhost:3002/Enseignant';

// get data
getAllData() : Observable<any> {
  return this.http.get(`${this.apiUrl}`);
}

//create data
createData(data:any) : Observable<any>
{
  console.log(data,'create data ##');
  return this.http.post(`http://localhost:3002/Enseignant`,data);
}

//delete data
deleteData(id:any) : Observable<any>
{
   let ids = id;
  return this.http.delete(`${this.apiUrl}/${ids}`);
}

// update data
updateData(data : any , id:any) : Observable<any>
{
  let ids = id;
  return this.http.put(`${this.apiUrl}/${ids}`,data);
}
 
// get single data
getSingleData(id : any):Observable<any>{
  let ids = id ;
  return  this.http.get(`${this.apiUrl}/${ids}`) ;
}

}