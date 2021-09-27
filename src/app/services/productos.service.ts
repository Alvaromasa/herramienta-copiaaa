import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {



 private api = "http://localhost:3001/api/product";




  constructor(private http:HttpClient) { }

public getAllproductos(): Observable<any>{
  return this.http.get(this.api);

}



}
