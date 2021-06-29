import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AadharService {
  url: string = 'http://192.168.0.110:4300/api';
  constructor(private http: HttpClient) {}

  AadharData =[];

  users = [];


  signup(data: any) {
    const createurl = this.url + '/create';
    return this.http.post(createurl, data);
  }

  getAllData() {
    const createurl = this.url + '/';
    return this.http.get(createurl);
  }

  getById(id:any) {
    const read = this.url + '/read/'+id;
    return this.http.get(read);
  }

  delete(id: string) {
    const deleteurl = this.url + '/delete/' + id;
    return this.http.delete(deleteurl);
  }

  edit(id: string,data:any) {
    const editurl = this.url + '/update/' + id;
    return this.http.put(editurl,data);
  }
}
 
