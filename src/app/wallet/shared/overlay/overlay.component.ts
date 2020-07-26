import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  private locked: boolean;
  private password: string;
  private checkStaking: boolean;

  constructor() {}

  ngOnInit() {
    this.locked = true;
    this.checkStaking = false;
  }

  setLocked(value: boolean): void {
    this.locked = value;
  }
}
