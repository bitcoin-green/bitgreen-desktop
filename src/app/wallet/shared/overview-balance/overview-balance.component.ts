import { Component, OnInit, Input, Output } from '@angular/core';
import { IOverviewBalance } from 'app/types/wallet';

@Component({
  selector: 'overview-balance',
  templateUrl: './overview-balance.component.html',
  styleUrls: ['./overview-balance.component.scss'],
})
export class OverviewBalanceComponent implements OnInit {
  @Input() balance: IOverviewBalance;

  constructor() {}

  ngOnInit() {}
}
