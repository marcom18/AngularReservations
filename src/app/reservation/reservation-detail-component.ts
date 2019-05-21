import { Component, OnInit } from '@angular/core';
import { Prenotazione } from './Prenotazione';
import { ActivatedRoute } from '@angular/router';
import { ReservationsService } from './reservations-service';


@Component({

  templateUrl: './reservation-detail-component.html',
})
export class ReservationDetailComponent implements OnInit {

  title = 'prenotazioni';

  reservation: Prenotazione;



  constructor(private route: ActivatedRoute, private reservationService: ReservationsService) {
  }

  ngOnInit(): void {
    const codPrenotazione = this.route.snapshot.paramMap.get("codPrenotazione");
    console.log(codPrenotazione);
    this.reservation = this.reservationService.getReservationByCod(codPrenotazione);

    console.log("trovata la reservation");
    console.log(this.reservation);
  }


  /*function passaparola(cod_prenotazione, cod_cliente, lezione,nome_campo,data_p,data_eff,costo_p,pagato,luci,note){ 
  this.cod_prenotazione= cod_prenotazione;
  this.cod_cliente=cod_cliente;
  this.lezione=lezione;
  this.nome_campo=nome_campo;
  this.data_p=data_p;
  this.data_eff=data_eff;
  this.costo_p=costo_p;
  this.pagato=pagato;
  this.luci=luci;
  this.note=note;
}*/


}
