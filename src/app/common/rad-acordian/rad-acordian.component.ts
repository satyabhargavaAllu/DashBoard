import { Component, OnInit, Input } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation } from "@angular/core";


@Component({
  selector: 'app-rad-acordian',
  templateUrl: './rad-acordian.component.html',
  styleUrls: ['./rad-acordian.component.css'],
  providers: [NgbAccordionConfig], // add the NgbAccordionConfig to the component providers
  encapsulation: ViewEncapsulation.None
})
export class RadAcordianComponent implements OnInit {
  @Input() title: string;


  constructor(config: NgbAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit() {
    
  }

}
