import { Component, OnInit, Input, Output } from '@angular/core';
import {Log} from "ng2-logger";

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  private log: any = Log.create('blockstatus.service id:' + Math.floor((Math.random() * 1000) + 1));

  @Input() color: string = 'primary';
  @Input() value: number;
  @Input() total: number;
  @Input() pSuffix: string = '';

  constructor() {}

  ngOnInit() {}
}
