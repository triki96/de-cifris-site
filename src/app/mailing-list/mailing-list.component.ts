import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../servizi/registration.service';

@Component({
  selector: 'app-mailing-list',
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.css']
})
export class MailingListComponent implements OnInit {

  titoli = ["Dott.ssa","Dott.","Prof.ssa","Prof.","Ing."];
  occupazioni = ["STUD","INF","ING","MAT","AK","PRO"];
  submitted : boolean;

  constructor(
    private fb : FormBuilder,
    private servizioRegistratione: RegistrationService
    ) { }

  ngOnInit(): void {
    this.submitted = false;
  }

  registrationForm = this.fb.group({
    indirizzoEmail: ['', [Validators.required]],
    titolo: [''],
    nome: ['', [Validators.required]],
    cognome: ['', [Validators.required]],
    provincia: [''],
    ente: ['', [Validators.required]],
    telefono: [''],
    citta: ['', [Validators.required]],
    occupazione: ['', [Validators.required]],
  });

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async onSubmit(){
    this.servizioRegistratione.register(this.registrationForm.value)
      .subscribe(
        (res) => { },
        (err) => { }
      )
    await this.sleep(500);
    this.submitted = true;
  }

}
