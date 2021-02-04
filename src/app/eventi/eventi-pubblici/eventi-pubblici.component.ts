import { Component, OnInit } from '@angular/core';
import { AttivitaServiceService } from 'src/app/servizi/attivita-service.service';

@Component({
  selector: 'app-eventi-pubblici',
  templateUrl: './eventi-pubblici.component.html',
  styleUrls: ['./eventi-pubblici.component.css']
})
export class EventiPubbliciComponent implements OnInit {

  sessioni: boolean = false;
  cittaDaMostrare: string = "";

  constructor(
    private servizioAttivita : AttivitaServiceService
  ) { }

  ngOnInit(): void { }

  mostraSessioni(){
    this.sessioni = !this.sessioni;
  }
  
  scegliAttivita(s: string){
    this.servizioAttivita.setAttivita(s);
    window.scrollTo(0, 0)
  }

  mostraCitta(s: string){
    this.cittaDaMostrare == s ? this.cittaDaMostrare = "" : this.cittaDaMostrare = s;
  }

}
