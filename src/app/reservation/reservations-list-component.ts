import {  OnInit } from '@angular/core';
import { Prenotazione } from './Prenotazione';

import { Component } from '@angular/core';
import { ReservationsService } from './reservations-service';
@Component({

  templateUrl: './reservations-list-component.html',


})

export class ReservationListComponent implements OnInit {

  constructor(private reservationService: ReservationsService){

  }
//ngOnInit: void{


prenotazioni: Prenotazione[] = [];



ngOnInit(): void{
this.prenotazioni=this.reservationService.getallReservations();
}


}
