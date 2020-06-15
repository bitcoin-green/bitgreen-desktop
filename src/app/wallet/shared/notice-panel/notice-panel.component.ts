import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'notice-panel',
  templateUrl: './notice-panel.component.html',
  styleUrls: ['./notice-panel.component.scss'],
})
export class NoticePanelComponent implements OnInit {
  @Input() icon: string;
  @Input() headerColor: string = '#fff';
  @Input() headerBackgroundColor: string = '#000';
  @Input() title: string;
  @Input() headerEndText: string = '';
  @Input() contentBackgroundColor: string;

  constructor() {}

  ngOnInit() {}
}
