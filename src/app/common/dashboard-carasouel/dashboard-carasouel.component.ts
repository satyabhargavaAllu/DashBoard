import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'rad-dashboard-carasouel',
  templateUrl: './dashboard-carasouel.component.html',
  styleUrls: ['./dashboard-carasouel.component.css']
})
export class DashboardCarasouelComponent implements OnInit {
  @Input() image: string;
  constructor() { }

  ngOnInit() {}

}
