import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  personaje: any;


  constructor(private rmService: ApiService) { }


  ngOnInit(): void {
    this.rmService.getCharacters().subscribe(
      (data) => {
        this.personaje = data;
        localStorage.setItem('characters', JSON.stringify(data));
        console.log(data);
      }
    )
  }
  detalle(personaje: any) {
    console.log('personaje seleccionado =>', personaje)
  }

}