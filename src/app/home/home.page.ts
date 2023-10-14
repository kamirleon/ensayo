import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  personaje: any;


  constructor(private rmService: ApiService, private router: Router) { }


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
    console.log('personaje seleccionado =>', personaje);
    localStorage.setItem('character', JSON.stringify(personaje));

    this.router.navigateByUrl('/detalle')
  }

}