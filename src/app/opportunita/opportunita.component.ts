import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opportunita',
  templateUrl: './opportunita.component.html',
  styleUrls: ['./opportunita.component.css']
})
export class OpportunitaComponent implements OnInit {

  visualizzaNuoveAziendeInteressate: boolean = false;

  opened : boolean = true;
  fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView({behavior: 'smooth'});
    } catch (e) { }
  }

  visualizzaAziendeInteressate(){
    this.visualizzaNuoveAziendeInteressate = !this.visualizzaNuoveAziendeInteressate;
  }

  toggleSidebar(){
    this.opened = !this.opened;
  }

  goTo(s : string){
    /* let url = "opportunita/#".concat(s); */
    /* window.location.href = url; */
    document.getElementById(s).scrollIntoView({behavior: 'smooth'});
  }

}
