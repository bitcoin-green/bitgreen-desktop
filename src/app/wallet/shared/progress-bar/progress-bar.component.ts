import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() color: string = 'primary';
  @Input() value: number;
  @Input() total: number;
  @Input() pSuffix: string = '';

  pValue: number;

  constructor() {}

  ngOnInit() {
    this.pValue = this.value * 100 / this.total;
  }
}
