import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITransaction } from 'app/types/wallet';

@Component({
  selector: 'transactions-tree',
  templateUrl: './transactions-tree.component.html',
  styleUrls: ['./transactions-tree.component.scss'],
})
export class TransactionsTreeComponent implements OnInit {
  @Input() transactions: ITransaction[] = [];
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClickItem(transaction: ITransaction) {
    this.onClick.emit(transaction);
  }
}
