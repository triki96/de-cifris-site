import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

/* Di seguito i dati per compilare il GoogleForm seguente 
  https://docs.google.com/forms/d/e/1FAIpQLSdXRs-olyfl9OGrg54QJ1VmF061Xb_yvahto34mPjCTz9jvig/viewform*/
  URL : string = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdXRs-olyfl9OGrg54QJ1VmF061Xb_yvahto34mPjCTz9jvig/formResponse";
  titolo : string = "?entry.2005620554="
  occupazione : string = "&entry.839337160=";
  nome : string = "&entry.90448766=";
  cognome : string = "&entry.742928363=";
  provincia : string = "&entry.599116797=";
  ente : string = "&entry.1280585698=";
  telefono : string = "&entry.1166974658=";
  citta : string = "&entry.1065046570=";
  indirizzoEmail : string = "&emailAddress=";
  requestURL : string = "";

  constructor(private http: HttpClient) { }

  register(userData){
    /* Creo l'URL di richiesta  */
    this.requestURL = 
      this.URL + 
      this.titolo + userData.titolo +
      this.occupazione + userData.occupazione +
      this.nome + userData.nome +
      this.cognome + userData.cognome +
      this.provincia + userData.provincia +
      this.ente + userData.ente +
      this.telefono + userData.telefono +
      this.citta + userData.citta +
      this.occupazione + userData.occupazione +
      this.indirizzoEmail + userData.indirizzoEmail;
    return this.http.get(this.requestURL);
  } 
}

