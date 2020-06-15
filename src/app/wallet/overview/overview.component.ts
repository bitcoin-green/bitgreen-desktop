import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RpcStateService } from 'app/core/core.module';

import { ManageWidgetsComponent } from 'app/modals/manage-widgets/manage-widgets.component';
import {
  IOverviewBalance,
  ITransaction,
  ISpotLight,
  IArticle,
} from 'app/types/wallet';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  testnet: boolean = false;

  balance: IOverviewBalance = {
    totalBalance: 6410,
    availableBalance: 1260,
    unconfirmedBalance: 150,
    lockedBalance: 5000,
    incomingValue: 1544,
    incomingTotal: 3000,
    outgoingValue: 1544,
    outgoingTotal: 3000,
  };

  recentTransactions: ITransaction[] = [
    {
      id: 'GU8GzMroLBRfeejJ2snPxFfaUziQUSvSuK',
      value: 55,
      timeStr: 'Today at 12:00 PM',
      timestamp: 234234234,
    },
    {
      id: 'GU8GzMroLBRfeejJ2snPxFfaUzjQUSvSuK',
      value: 55,
      timeStr: 'Today at 12:00 PM',
      timestamp: 234234234,
    },
    {
      id: 'GU8GzMroLBRfeejJ2snPxFfaUzsQUSvSuK',
      value: 55,
      timeStr: 'Today at 12:00 PM',
      timestamp: 234234234,
    },
    {
      id: 'GU8GzMroLBRfeejJ2snPxFfaUzqQUSvSuK',
      value: 55,
      timeStr: 'Today at 12:00 PM',
      timestamp: 234234234,
    },
    {
      id: 'GU8GzMroLBRfeejJ2snPxFfaUzaQUSvSuK',
      value: 55,
      timeStr: 'Today at 12:00 PM',
      timestamp: 234234234,
    },
    {
      id: 'GU8GzMroLBRfeejJ2snPxFfaUztQUSvSuK',
      value: 55,
      timeStr: 'Today at 12:00 PM',
      timestamp: 234234234,
    },
  ];

  spotLights: ISpotLight[] = [
    { title: `Jim's national tree planting`, percent: 35 },
    { title: `Solar panels for child care testetesttetst`, percent: 75 },
  ];

  articles: IArticle[] = [
    {
      img: '',
      title: 'Article main heading',
      level: 'Medium',
      timestamp: 0,
      timeStr: '3 days ago',
    },
    {
      img: '',
      title: 'Article main heading',
      level: 'Medium',
      timestamp: 0,
      timeStr: '3 days ago',
    },
  ];

  latestArticlesFromTeam: IArticle[] = [
    {
      img: '',
      title: 'Article main heading',
      level: 'Medium',
      timestamp: 0,
      timeStr: '3 days ago',
    },
    {
      img: '',
      title: 'Article main heading',
      level: 'Medium',
      timestamp: 0,
      timeStr: '3 days ago',
    },
    {
      img: '',
      title: 'Article main heading',
      level: 'Medium',
      timestamp: 0,
      timeStr: '3 days ago',
    },
  ];

  constructor(public dialog: MatDialog, private rpcState: RpcStateService) {}

  openWidgetManager(): void {
    const dialogRef = this.dialog.open(ManageWidgetsComponent);
  }

  ngOnInit() {
    // check if testnet -> Show/Hide Anon Balance
    this.rpcState
      .observe('getblockchaininfo', 'chain')
      .take(1)
      .subscribe(chain => (this.testnet = chain === 'test'));
  }

  onClickTransaction(transaction: ITransaction) {}
}
