import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AttivitaServiceService } from '../servizi/attivita-service.service';

@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.component.html',
  styleUrls: ['./attivita.component.css']
})
export class AttivitaComponent implements OnInit {

  tipoAttivita : string;
  tesiVisibili: boolean = false;

  constructor(
    /* private servizioAttivita : AttivitaServiceService */
  ) {  }

  ngOnInit(): void {
    /* this.servizioAttivita.getAttivita ? document.getElementById(this.servizioAttivita.getAttivita()).click() : "";
    this.servizioAttivita.attivitaChanges.subscribe((s: string) => {
      document.getElementById(s).click();
      console.log(s);
    }); */
  }

  mostraTesi(){
    this.tesiVisibili = !this.tesiVisibili;
  }

}
