import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  attivitaDaMostrare: string = "";
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    /* document.getElementById("openModalButton").click(); */
  }

}
