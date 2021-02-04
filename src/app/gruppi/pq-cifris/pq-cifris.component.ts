import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pq-cifris',
  templateUrl: './pq-cifris.component.html',
  styleUrls: ['./pq-cifris.component.css']
})
export class PqCifrisComponent implements OnInit {

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
