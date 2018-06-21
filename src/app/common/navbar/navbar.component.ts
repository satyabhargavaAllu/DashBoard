import { Component, OnInit} from '@angular/core';

import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {navList} from '../../models/nav.model'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navListMenu:navList[];
  constructor() { }

    ngOnInit() {
      this.navListMenu = [
          {name:'ADC',link:'/adc'},
          {name:'ADG',link:'/adg'},
          {name:'CCOE',link:'/ccoe'},
          {name:'TRA',link:'/tra'},
          {name:'LEA',link:'/lea'}
      ]
    }

}
