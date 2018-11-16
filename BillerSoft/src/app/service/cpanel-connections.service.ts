import { Injectable } from '@angular/core';
import { Observable, of,  } from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http'
import {ItemModel } from '../models/cpanel.model';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CpanelConnectionsService {
body:any;
  constructor(private http:Http) { }

 /* postItemData(data:ItemModel):Observable<ItemModel>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
console.log("ths dara " +data.itemName);
return;
  

  }*/

postItemData(data){
  this.body = data;
  console.log("ser " +data);
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.post('http://localhost:3000/api/ItemModels', data, options )
  .pipe(
    map((res:Response) => res.json())
  
  )
}

delData(data){
  this.body = data;
  console.log("ser " +data);
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  let url = 'http://localhost:3000/api/ItemModels/'+data;
  console.log("del" +this.http.delete(url, options))
  return this.http.delete(url, options)
  .pipe(
    map((res:Response) => res.json())
  
  )
}
  getItemData(){
    return this.http.get('http://localhost:3000/api/ItemModels');
  }
}
