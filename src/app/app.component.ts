import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mainTitle = 'automation';

  @Input() title: string;
  @Input() description: string;
  @Input() id: string;

  constructor() {
    this.id = '';
    this.title = '';
    this.description = '';
  }

  openModal() {
    console.log('open a modal');
  }
}
