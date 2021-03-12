import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AttivitaServiceService } from '../servizi/attivita-service.service';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css']
})
export class EventiComponent implements OnInit {

  sessioni: boolean = false;
  cittaDaMostrare: string = "";
  mostraFuturi: boolean = true;
  mostraPassati: boolean = true;
  /* eventiDaMostrare: string = ""; */
  /* eventoDaMostrare: string= ""; */

  constructor(
    private servizioAttivita : AttivitaServiceService
  ) { }

  ngOnInit(): void {
  }

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

  toggleEventi(s: string){
    /* this. eventiDaMostrare == s ? this.eventiDaMostrare = "": this.eventiDaMostrare = s; */
    console.log(s);
    s == 'futuri' ? this.mostraFuturi = !this.mostraFuturi : this.mostraPassati = !this.mostraPassati;
  }

  mostraEventi(s: string){
    s == 'futuri' ? this.mostraFuturi = true : this.mostraPassati = true;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /* Ai posteri: utilizzare del codice asincrono (async/await) mi è sembrato l'unico 
  modo per gestire la transizione della pagina alla sezione "eventi passati". */
  async goTo(s : string){
    /* this.eventiDaMostrare = s; */
    this.mostraEventi(s);
    await this.sleep(10);
    document.getElementById(s).scrollIntoView({behavior: 'smooth'});
  }
}
