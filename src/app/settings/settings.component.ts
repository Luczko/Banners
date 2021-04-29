import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  @Output() clickOne = new EventEmitter<string>();
  @Output() clickTwo = new EventEmitter<string>();
  @Input() colors!: string[];
  @Output() changePerColor1 = new EventEmitter<number>();
  @Output() changePerColor2 = new EventEmitter<number>();
  @Output() changeWidth = new EventEmitter<number>();
  @Output() changeHeight = new EventEmitter<number>();
  @Output() changeFontSize = new EventEmitter<number>();

  width = 600;
  height = 500;
  color1 = 'red';
  color2 = 'yellow';
  percentColor1 = 0;
  percentColor2 = 100;
  fontSize = 52;

  changeColorOne(color: string): void {
    this.clickOne.emit(color);
  }
  changeColorTwo(color: string): void {
    this.clickTwo.emit(color);
  }
}
