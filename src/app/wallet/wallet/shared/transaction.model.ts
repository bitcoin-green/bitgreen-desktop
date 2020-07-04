import { Amount, DateFormatter } from '../../../core/util/utils';
import { AddressType } from './address.model';

export type TransactionCategory =
  | 'all'
  | 'receive'
  | 'send'
  | 'payment_to_yourself'
  | 'mined'
  | 'mint_by_stake'
  | 'masternode_reward';

export class Transaction {
  type: string;

  txid: string;
  address: string;
  label: string;
  category: TransactionCategory;
  amount: number;
  reward: number;
  fee: number;
  time: number;
  comment: string;
  n0: string;
  n1: string;

  outputs: any[];

  /* conflicting txs */
  walletconflicts: any[];

  /* block info */
  blockhash: string;
  blockindex: number;
  blocktime: number;
  confirmations: number;

  constructor(json: any) {
    /* transactions */

    this.txid = json.txid;
    if (json.outputs && json.outputs.length) {
      this.address = json.outputs[0].address;
      this.label = json.outputs[0].label;
    }
    this.category = json.category;
    this.amount = json.amount;
    this.reward = json.reward;
    this.fee = json.fee;
    this.time = json.time;
    this.comment = json.comment;
    this.n0 = json.n0;
    this.n1 = json.n1;

    this.outputs = json.outputs;

    /* conflicting txs */
    this.walletconflicts = json.walletconflicts;

    /* block info */
    this.blockhash = json.blockhash;
    this.blockindex = json.blockindex;
    this.blocktime = json.blocktime;
    this.confirmations = json.confirmations;
  }

  public getAddress(): string {
    return this.address;
  }

  public getLabel(): string {
    return this.label;
  }

  getCategory(): TransactionCategory {
    return this.category;
  }

  public getExpandedTransactionID(): string {
    return (
      this.txid + this.getAmountObject().getAmount() + this.category + this.time
    );
  }

  public getConfirmation(): number {
    return Number(this.confirmations);
  }

  /* Amount stuff */
  public getAmount(): number {
    return +this.amount;
  }

  /** Turns amount into an Amount Object */
  public getAmountObject(): Amount {
    return new Amount(this.getAmount());
  }

  /** Calculates the actual amount that was transfered, including the fee */
  /* todo: fee is not defined in normal receive tx, wut? */
  public getNetAmount(): number {
    const amount: number = +this.getAmountObject().getAmount();
    // @ TODO: the fee for multisig transaction includes the change
    /* If fee undefined then just return amount */
    if (this.fee === undefined) {
      return amount;
      /* sent */
    } else if (amount < 0) {
      return new Amount(+amount + +this.fee).getAmount();
    } else {
      return new Amount(+amount - +this.fee).getAmount();
    }
  }

  /* Date stuff */
  public getDate(): string {
    const today = new Date();
    const createdTime = new Date(this.time * 1000);
    const diff = today.getTime() - createdTime.getTime();

    if (today.getDate() === createdTime.getDate() && diff < 1000 * 3600 * 24) {
      return `Today at ${
        createdTime
          .toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })
          .split(',')[1]
      }`;
    } else if (
      today.getDate() - 1 === createdTime.getDate() &&
      diff < 1000 * 3600 * 48
    ) {
      return `Yesterday at ${
        createdTime
          .toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })
          .split(',')[1]
      }`;
    }

    return new DateFormatter(new Date(this.time * 1000)).dateFormatter();
  }

  /* Narration */
  public getNarration() {
    for (const key in this.outputs) {
      if (this.outputs[key] && this.outputs[key].narration) {
        return this.outputs[key].narration;
      }
    }
    return false;
  }
}
