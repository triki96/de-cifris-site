import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-cifris',
  templateUrl: './math-cifris.component.html',
  styleUrls: ['./math-cifris.component.css']
})
export class MathCifrisComponent implements OnInit {

  attivitaDaMostrare: string = "";

  constructor() { }

  ngOnInit(): void {
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
