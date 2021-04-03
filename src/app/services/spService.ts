import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class restService {
  constructor(private httpClient: HttpClient) { }
  public getListItemsByUri(page: number){
    return this.httpClient.get(`https://reqres.in/api/users?page=${page}`);
  }
  public getUserData(id: number){
    return this.httpClient.get(`https://reqres.in/api/users/${id}`);
  }

}
