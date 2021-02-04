import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/* AAA: Con la modifica richiesta da G. il 4 gennaio 2021 questo servizio risulta inutile;
non provvedo immediatamente ad eliminarlo perchè potrebbe tornare utile in seconda battuta,
e in quel caso mi farebbe comodo averlo già implementato. -GT- 4-01-2121 */

@Injectable({
  providedIn: 'root'
})
export class AttivitaServiceService {

  attivitaChanges = new Subject<string>();
  private attivita: string = "";
  
  constructor() { }

  public setAttivita(s : string){
    this.attivita = s;
    this.attivitaChanges.next(s);
  }

  public getAttivita(){
    return this.attivita;
  }
}
