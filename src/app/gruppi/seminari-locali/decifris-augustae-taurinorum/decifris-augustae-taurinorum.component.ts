import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decifris-augustae-taurinorum',
  templateUrl: './decifris-augustae-taurinorum.component.html',
  styleUrls: ['./decifris-augustae-taurinorum.component.css']
})
export class DecifrisAugustaeTaurinorumComponent implements OnInit {
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
