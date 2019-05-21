import { Prenotazione } from './Prenotazione';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class ReservationsService{

    prenotazioni: Prenotazione[] = [];
    constructor (){
        let res1 = new Prenotazione("1","1",false,"TennisA",new Date(2019, 1, 17, 0, 0),new Date(2019, 1, 17, 0, 0),200,true, false,"");
        let res2 =new Prenotazione("2","1",false,"TennisA",new Date(2019, 1, 17, 0, 0),new Date(2019, 1, 17, 0, 0),200,true, false,"");
        let res3 =new Prenotazione("3","1",false,"TennisA",new Date(2019, 1, 17, 0, 0),new Date(2019, 1, 17, 0, 0),200,true, false,"");
      this.prenotazioni.push(res1);
      this.prenotazioni.push(res2);
      this.prenotazioni.push(res3);
    }

    getallReservations():Prenotazione[]{
        return this.prenotazioni;
    }


    getReservationByCod(codPrenotazione:String) : Prenotazione {
        return this.prenotazioni.find( p => p.CodPrenotazione === codPrenotazione)

    }

}