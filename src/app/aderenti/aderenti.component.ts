import { Component, OnInit } from '@angular/core';
import { AttivitaServiceService } from '../servizi/attivita-service.service';

@Component({
  selector: 'app-aderenti',
  templateUrl: './aderenti.component.html',
  styleUrls: ['./aderenti.component.css']
})
export class AderentiComponent implements OnInit {

  constructor(
    private servizioAttivita : AttivitaServiceService
  ) { }

  scegliAttivita(s: string){
    /* this.servizioAttivita.setAttivita(s);
    window.scrollTo(0, 0) */
  }
  
  ngOnInit(): void { }

}
