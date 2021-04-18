import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-start-template',
  templateUrl: './box-start-template.component.html',
  styleUrls: ['./box-start-template.component.scss'],
})
export class BoxStartTemplateComponent implements OnInit {
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

  ngOnInit(): void {}
}
