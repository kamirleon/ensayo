import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { HomePage } from './home.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
    
  ],
  declarations: [HomePage],
  providers : [ApiService]
})
export class HomePageModule {}
