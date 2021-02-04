import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decifris-schola-latina',
  templateUrl: './decifris-schola-latina.component.html',
  styleUrls: ['./decifris-schola-latina.component.css']
})
export class DecifrisScholaLatinaComponent implements OnInit {
  attivitaDaMostrare: string = "";

  constructor() { }

  ngOnInit(): void {
  }
 
  mostraAttivita(s : string){
    this.attivitaDaMostrare == s ? this.attivitaDaMostrare = "" : this.attivitaDaMostrare = s;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /* Ai posteri: utilizzare del codice asincrono (async/await) mi è sembrato l'unico 
  modo per gestire la transizione della pagina alla sezione "eventi passati".*/
  async goTo(s : string){
    this.attivitaDaMostrare = s;
    await this.sleep(10);
    document.getElementById(s).scrollIntoView({behavior: 'smooth'});
  }

}
