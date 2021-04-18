import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-email-template',
  templateUrl: './box-email-template.component.html',
  styleUrls: ['./box-email-template.component.scss'],
})
export class BoxEmailTemplateComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() id: string;

  constructor() {
    this.id = '';
    this.title = '';
    this.description = '';
  }

  ngOnInit(): void {}
}
