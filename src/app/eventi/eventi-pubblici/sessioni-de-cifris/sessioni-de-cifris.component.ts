import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessioni-de-cifris',
  templateUrl: './sessioni-de-cifris.component.html',
  styleUrls: ['./sessioni-de-cifris.component.css']
})
export class SessioniDeCifrisComponent implements OnInit {
  cittaDaMostrare: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  mostraCitta(s: string){
    this.cittaDaMostrare == s ? this.cittaDaMostrare = "" : this.cittaDaMostrare = s;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /* Ai posteri: utilizzare del codice asincrono (async/await) mi è sembrato l'unico 
  modo per gestire la transizione della pagina alla sezione "eventi passati".*/
  async goTo(s : string){
    await this.sleep(10);
    document.getElementById(s).scrollIntoView({behavior: 'smooth'});
  }

}
