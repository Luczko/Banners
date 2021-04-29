import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() layout = new EventEmitter<string>();
  @Output() download = new EventEmitter<void>();

  setLay(param: string): void {
    this.layout.emit(param);
  }
  setDown(): void {
    this.download.emit();
  }
}
