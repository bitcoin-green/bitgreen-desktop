import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'spot-light-card',
  templateUrl: './spot-light-card.component.html',
  styleUrls: ['./spot-light-card.component.scss'],
})
export class SpotLightCardComponent implements OnInit {
  @Input() title: string;
  @Input() percent: number;

  constructor() {}

  ngOnInit() {}
}
