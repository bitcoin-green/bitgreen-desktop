import { Component, OnInit, Input, Output } from '@angular/core';
import {Amount} from "../../../core/util/utils";
import {Log} from "ng2-logger";
import { RpcService, RpcStateService } from "../../../core/core.module";

@Component({
  selector: 'overview-balance',
  templateUrl: './overview-balance.component.html',
  styleUrls: ['./overview-balance.component.scss'],
})
export class OverviewBalanceComponent implements OnInit {

  constructor(
    private rpc: RpcService,
    private rpcState: RpcStateService
  ) {}
  private destroyed: boolean = false;
  private log: any = Log.create('blockstatus.service id:' + Math.floor((Math.random() * 1000) + 1));
  private listeningForUpdates: boolean = false;

  private totalBalance: Amount = new Amount(0);
  private availableBalance: Amount = new Amount(0);
  private unconfirmedBalance: Amount = new Amount(0);
  private lockedBalance: Amount = new Amount(0);
  public incomingValue: number = 0;
  public outgoingValue: number = 0;
  public monthlyTotal: number = 0;

  ngOnInit() {
    this.rpcState.observe('getbalancedatadesktop', 'totalBalance')
      .takeWhile(() => !this.destroyed)
      .subscribe(
        totalbalance => this.totalBalance = new Amount(totalbalance || 0, 4),
        error => this.log.error('Failed to get balance, ', error));

    this.rpcState.observe('getbalancedatadesktop', 'availableBalance')
      .takeWhile(() => !this.destroyed)
      .subscribe(
        availableBalance => this.availableBalance = new Amount(availableBalance || 0, 4),
        error => this.log.error('Failed to get balance, ', error));

    this.rpcState.observe('getbalancedatadesktop', 'unconfirmedBalance')
      .takeWhile(() => !this.destroyed)
      .subscribe(
        unconfirmedBalance => this.unconfirmedBalance = new Amount(unconfirmedBalance || 0, 4),
        error => this.log.error('Failed to get balance, ', error));

    this.rpcState.observe('getbalancedatadesktop', 'lockedBalance')
      .takeWhile(() => !this.destroyed)
      .subscribe(
        lockedBalance => this.lockedBalance = new Amount(lockedBalance || 0, 4),
        error => this.log.error('Failed to get balance, ', error));

    this.rpcState.observe('getbalancedatadesktop', 'incoming_value')
      .takeWhile(() => !this.destroyed)
      .subscribe(
        incomingValue => this.incomingValue = incomingValue || 0,
        error => this.log.error('Failed to get balance, ', error));

    this.rpcState.observe('getbalancedatadesktop', 'outgoing_value')
      .takeWhile(() => !this.destroyed)
      .subscribe(
        outgoingValue => this.outgoingValue = outgoingValue || 0,
        error => this.log.error('Failed to get balance, ', error));

    this.rpcState.observe('getbalancedatadesktop', 'monthly_total')
      .takeWhile(() => !this.destroyed)
      .subscribe(
        monthlyTotal => this.monthlyTotal = monthlyTotal || 0,
        error => this.log.error('Failed to get balance, ', error));


    //this.postConstructor();
  }

  postConstructor(): void {

    // load the first transactions
    this.updateBalanceData();

    // register the updates, every block / tx!
    this.registerUpdates();
    this.listeningForUpdates = true;
  }

  registerUpdates(): void {

    // prevent multiple listeners
    if (this.listeningForUpdates) {
      this.log.er(`Already listeniing for updates, postConstructor called twice?`);
      return;
    }

    this.rpcState.observe('getbalancedatadesktop', 'totalBalance')
      .takeWhile(() => !this.destroyed)
      .distinctUntilChanged() // only update when txcount changes
      .skip(1) // skip the first one (shareReplay)
      .subscribe(txcount => {
        this.log.d('--- update balance data ---');
        this.updateBalanceData();
      });

    this.rpcState.observe('getbalancedatadesktop', 'availableBalance')
      .takeWhile(() => !this.destroyed)
      .distinctUntilChanged() // only update when txcount changes
      .skip(1) // skip the first one (shareReplay)
      .subscribe(txcount => {
        this.log.d('--- update balance data ---');
        this.updateBalanceData();
      });

    this.rpcState.observe('getbalancedatadesktop', 'unconfirmedBalance')
      .takeWhile(() => !this.destroyed)
      .distinctUntilChanged() // only update when txcount changes
      .skip(1) // skip the first one (shareReplay)
      .subscribe(txcount => {
        this.log.d('--- update balance data ---');
        this.updateBalanceData();
      });

    this.rpcState.observe('getbalancedatadesktop', 'lockedBalance')
      .takeWhile(() => !this.destroyed)
      .distinctUntilChanged() // only update when txcount changes
      .skip(1) // skip the first one (shareReplay)
      .subscribe(txcount => {
        this.log.d('--- update balance data ---');
        this.updateBalanceData();
      });

    this.rpcState.observe('getbalancedatadesktop', 'incoming_value')
      .takeWhile(() => !this.destroyed)
      .distinctUntilChanged() // only update when txcount changes
      .skip(1) // skip the first one (shareReplay)
      .subscribe(txcount => {
        this.log.d('--- update balance data ---');
        this.updateBalanceData();
      });

    this.rpcState.observe('getbalancedatadesktop', 'outgoing_value')
      .takeWhile(() => !this.destroyed)
      .distinctUntilChanged() // only update when txcount changes
      .skip(1) // skip the first one (shareReplay)
      .subscribe(txcount => {
        this.log.d('--- update balance data ---');
        this.updateBalanceData();
      });

    this.rpcState.observe('getbalancedatadesktop', 'monthly_total')
      .takeWhile(() => !this.destroyed)
      .distinctUntilChanged() // only update when txcount changes
      .skip(1) // skip the first one (shareReplay)
      .subscribe(txcount => {
        this.log.d('--- update balance data ---');
        this.updateBalanceData();
      });

  }


  updateBalanceData(): void {
    this.rpc.call('getbalancedatadesktop')
      .subscribe(
        (_balance: Array<Object>) => {

          this.log.d(`getbalancedatadesktop(): totalBalance ${_balance['totalBalance']}`);
          this.log.d(`getbalancedatadesktop(): availableBalance ${_balance['availableBalance']}`);
          this.log.d(`getbalancedatadesktop(): unconfirmedBalance ${_balance['unconfirmedBalance']}`);
          this.log.d(`getbalancedatadesktop(): lockedBalance ${_balance['lockedBalance']}`);
          this.log.d(`getbalancedatadesktop(): incomingValue ${_balance['incoming_value']}`);
          this.log.d(`getbalancedatadesktop(): outgoingValue ${_balance['outgoing_value']}`);
          this.log.d(`getbalancedatadesktop(): monthlyTotal ${_balance['monthly_total']}`);
          this.totalBalance = new Amount(_balance['totalBalance'] || 0, 4);
          this.availableBalance = new Amount(_balance['availableBalance'] || 0, 4);
          this.unconfirmedBalance = new Amount(_balance['unconfirmedBalance'] || 0, 4);
          this.lockedBalance = new Amount(_balance['lockedBalance'] || 0, 4);
          this.incomingValue = _balance['incoming_value'] || 0
          this.outgoingValue = _balance['outgoing_value'] || 0
          this.monthlyTotal = _balance['monthly_total'] || 0

        },
        (error) => {
          this.log.error('Failed to get balance getbalancedatadesktop(), ', error);
        }
      );
  }

  ngOnDestroy() {
    this.destroyed = true;
  }

}
