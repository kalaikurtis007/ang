import { Component, OnInit, ElementRef } from '@angular/core';
import {ROUTES} from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  private listTitles: any[];
  location: Location;
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(location: Location, private element: ElementRef) {
    this.location = location;
    this.sidebarVisible = false;
  }
  ngOnInit() {
    this.listTitles=ROUTES.filter(listTitle=>listTitle);    
    const navbar: HTMLElement =this.element.nativeElement;
    this.toggleButton=navbar.getElementsByClassName('navbar-toggle')[0];    
  }
  sidebarOpen(){

  };
  sidebarClose(){

  };

  sidebarToggle(){

  };


}