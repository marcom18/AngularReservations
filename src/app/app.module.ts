import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReservationDetailComponent } from './reservation/reservation-detail-component';

import { AppComponent } from './app.component';
import { ReservationListComponent } from './reservation/reservations-list-component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, ReservationListComponent, HomeComponent,ReservationDetailComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([
      {path: 'welcome', component: HomeComponent}, 
      {path:"reservations", component: ReservationListComponent },
      {path:"reservations/:codPrenotazione", component: ReservationDetailComponent },
      {path:"", redirectTo:"welcome", pathMatch: "full"},
      {path:"**", redirectTo:"welcome"}

    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
