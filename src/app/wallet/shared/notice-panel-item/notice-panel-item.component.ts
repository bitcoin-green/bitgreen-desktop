import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'notice-panel-item',
  templateUrl: './notice-panel-item.component.html',
  styleUrls: ['./notice-panel-item.component.scss'],
})
export class NoticePanelItemComponent implements OnInit {
  @Input() iconColor: string = '#fff';
  @Input() icon: string;
  @Input() inCircle: boolean = false;
  @Input() circleBackgroundColor: string = '#fff';
  @Input() title: string;
  @Input() buttonTitle: string;
  @Input() buttonColor: string;
  @Input() description: string;

  constructor() {}

  ngOnInit() {}
}
