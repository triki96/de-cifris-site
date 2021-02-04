import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventEmitter } from 'events';
import { AttivitaServiceService } from './servizi/attivita-service.service';
import { Router, NavigationEnd } from '@angular/router';
import { RegistrationService } from './servizi/registration.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  constructor(
    //private router: Router,
    private servizioAttivita : AttivitaServiceService
  ) { }

  ngOnInit(): void {
    //document.body.style.zoom="120%";
  }

  scegliAttivita(s: string){
    this.servizioAttivita.setAttivita(s);
    window.scrollTo(0, 0)
  }

  onActivate(event) {
    window.scroll(0,0);
}
  
}
