import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-timer-template',
  templateUrl: './box-timer-template.component.html',
  styleUrls: ['./box-timer-template.component.scss'],
})
export class BoxTimerTemplateComponent implements OnInit {
  @Input() title: string;
  @Input() id: string;
  @Input() description: string;

  constructor() {
    this.id = '';
    this.title = '';
    this.description = '';
  }

  ngOnInit(): void {}
}
