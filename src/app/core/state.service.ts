import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private personajes: BehaviorSubject<any> = new BehaviorSubject(null);

  private personaje: BehaviorSubject<any> = new BehaviorSubject(null);

  
  //get
  public obtenerPersonajes() {
    return this.personajes.asObservable();

  }
  //set
  public personajeValue(personaje: any) {
    this.personajes.next(this.personajes)

  }

  constructor() { }
}
