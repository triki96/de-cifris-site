import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-decifris-athesis',
  templateUrl: './decifris-athesis.component.html',
  styleUrls: ['./decifris-athesis.component.css']
})
export class DecifrisAthesisComponent implements OnInit {

  attivitaDaMostrare : string = "";

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
