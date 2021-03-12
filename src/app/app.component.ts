import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventEmitter } from 'events';
import { AttivitaServiceService } from './servizi/attivita-service.service';
import { Router, NavigationEnd } from '@angular/router';
import { RegistrationService } from './servizi/registration.service';
import { ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit{  

  @ViewChild('openModal') openModal:ElementRef;

  constructor(
    //private router: Router,
    private servizioAttivita : AttivitaServiceService,
    private modalService: NgbModal
  ) { }

  ngAfterViewInit(): void {
    /* Per aprire la modale all'inizio */
    /* this.openModal.nativeElement.click(); */
  }

  scegliAttivita(s: string){
    this.servizioAttivita.setAttivita(s);
    window.scrollTo(0, 0)
  }

  onActivate(event) {
    window.scroll(0,0);
  }
  
}
