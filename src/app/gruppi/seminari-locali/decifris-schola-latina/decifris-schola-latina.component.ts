import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decifris-schola-latina',
  templateUrl: './decifris-schola-latina.component.html',
  styleUrls: ['./decifris-schola-latina.component.css']
})
export class DecifrisScholaLatinaComponent implements OnInit {
  /* attivitaDaMostrare: string = ""; */
  mostraFuturi: boolean = true;
  mostraPassati: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
 
  toggleAttivita(s: string){
    s == 'futuri' ? this.mostraFuturi = !this.mostraFuturi : this.mostraPassati = !this.mostraPassati;
  }

  mostraAttivita(s : string){
    /* this.attivitaDaMostrare == s ? this.attivitaDaMostrare = "" : this.attivitaDaMostrare = s; */
    s == 'futuri' ? this.mostraFuturi = true : this.mostraPassati = true;
  } 

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /* Ai posteri: utilizzare del codice asincrono (async/await) mi è sembrato l'unico 
  modo per gestire la transizione della pagina alla sezione "eventi passati".*/
  async goTo(s : string){
    this.mostraAttivita(s);
    await this.sleep(10);
    document.getElementById(s).scrollIntoView({behavior: 'smooth'});
  }

}
