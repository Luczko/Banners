import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  @Output() clickOne = new EventEmitter<any>();
  @Output() clickTwo = new EventEmitter<any>();
  @Input() colors: any;
  @Input() percentColor1: any;
  @Input() percentColor2: any;
  @Input() width: any;
  @Input() height: any;
  @Input() fontSize: any;

  changeColorOne(color: string): void {
    this.clickOne.emit(color);
  }
  changeColorTwo(color: string): void {
    this.clickTwo.emit(color);
  }
}
