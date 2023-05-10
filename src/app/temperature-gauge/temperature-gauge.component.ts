import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-gauge',
  templateUrl: './temperature-gauge.component.html',
  styleUrls: ['./temperature-gauge.component.css']
})
export class TemperatureGaugeComponent implements OnInit {

  titel: string = "thermostaat";
  temperatuur: number = 19;

  constructor() { }

  ngOnInit(): void {
  }

}
