import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getCharacters(){
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
}
