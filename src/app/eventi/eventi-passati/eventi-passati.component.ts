import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventi-passati',
  templateUrl: './eventi-passati.component.html',
  styleUrls: ['./eventi-passati.component.css']
})
export class EventiPassatiComponent implements OnInit {
  eventoDaMostrare: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  mostraEvento(s: string){
    this.eventoDaMostrare == s? this.eventoDaMostrare ="" : this.eventoDaMostrare = s;
  }
}
