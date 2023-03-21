import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  subscribe(arg0: (res: any) => void) {
      throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  addItems(data:any){
    return this.http.post(`${baseUrl}`,data)
  }
  viewItems(){
    return this.http.get(`${baseUrl}`)
  }
  deleteItems(id:string){
    return this.http.delete(`${baseUrl}/${id}`)
  }
  getCurrentData(data:any){
    return this.http.get(`${baseUrl}/${data}`)
  }
  updateItems(id:any,data:any){
    return this.http.put(`${baseUrl}/${id}`,data)
  }
}
