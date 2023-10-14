import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  public getCharacters(){
    return this.http.get(`${this.BASE_URL}/character`)
  }
}
