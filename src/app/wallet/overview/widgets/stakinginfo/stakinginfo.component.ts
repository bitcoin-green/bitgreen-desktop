import { Component, OnDestroy } from '@angular/core';
import { Log } from 'ng2-logger';

import { RpcStateService } from '../../../../core/core.module';
import { Amount, Duration } from '../../../../core/util/utils';

@Component({
  selector: 'app-stakinginfo',
  templateUrl: './stakinginfo.component.html',
  styleUrls: ['./stakinginfo.component.scss']
})
export class StakinginfoComponent implements OnDestroy {


  /*  General   */
  private log: any = Log.create('stakinginfo.component' + Math.floor((Math.random() * 1000) + 1));
  private destroyed: boolean = false;

  /*  RPC   */
  private moneysupply: number = 0;


  constructor(
    private rpcState: RpcStateService
    ) {

    this.rpcState.observe('getblockchaininfo', 'moneysupply')
    .takeWhile(() => !this.destroyed)
    .subscribe(
      success => {
        this.log.d(`setting moneysupply ${success}`);
        this.moneysupply = success;
      },
      error => this.log.er('Constructor, moneysupply error:' + error));

  }

  ngOnDestroy() {
    this.destroyed = true;
  }

}
