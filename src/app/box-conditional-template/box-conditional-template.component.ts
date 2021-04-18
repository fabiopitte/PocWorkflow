import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-conditional-template',
  templateUrl: './box-conditional-template.component.html',
  styleUrls: ['./box-conditional-template.component.scss'],
})
export class BoxConditionalTemplateComponent implements OnInit {
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
