import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
 menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;
  constructor(private appRoutes: Router) {}

  goHome() {
    this.appRoutes.navigate(['']); 
  }

  goProyecto() {
    this.appRoutes.navigate(['proyecto']); 
  }
  goPantalla() {
    this.appRoutes.navigate(['pantallas']); 
  }
  goEscenario() {
    this.appRoutes.navigate(['escenario']); 
  }
  goCp() {
    this.appRoutes.navigate(['cp']); 
  }
  goPaso() {
    this.appRoutes.navigate(['paso']); 
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
}
