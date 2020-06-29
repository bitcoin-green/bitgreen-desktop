import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import {RpcService, RpcStateService} from 'app/core/core.module';

import { ManageWidgetsComponent } from 'app/modals/manage-widgets/manage-widgets.component';
import {
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
  walletInitialized: boolean = undefined;

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


  private destroyed: boolean = false;

  constructor(
    public dialog: MatDialog,
    private rpcState: RpcStateService
  ) {}

  openWidgetManager(): void {
    const dialogRef = this.dialog.open(ManageWidgetsComponent);
  }

  getBalance(): any {
    return this.rpcState.get('getbalancedatadesktop');
  }

  ngOnInit() {

    // Updates the error box in the sidenav if wallet is not initialized.
    this.rpcState.observe('ui:walletInitialized')
      .takeWhile(() => !this.destroyed)
      .subscribe(status => this.walletInitialized = status);

    // check if testnet -> Show/Hide Anon Balance
    this.rpcState
      .observe('getblockchaininfo', 'chain')
      .take(1)
      .subscribe(chain => (this.testnet = chain === 'test'));

  }

  onClickTransaction(transaction: ITransaction) {}
}
