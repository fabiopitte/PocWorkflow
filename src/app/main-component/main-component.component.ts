import { AfterViewInit, QueryList } from '@angular/core';
import { ElementRef } from '@angular/core';
import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  ViewChildren,
} from '@angular/core';
import { BoxConditionalTemplateComponent } from '../box-conditional-template/box-conditional-template.component';
import { BoxEmailTemplateComponent } from '../box-email-template/box-email-template.component';
import { BoxStartTemplateComponent } from '../box-start-template/box-start-template.component';
import { BoxTimerTemplateComponent } from '../box-timer-template/box-timer-template.component';

import { WorkflowsService } from '../workflows.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
})
export class MainComponentComponent implements OnInit, AfterViewInit {
  //count = 0;

  @ViewChild('formTemplate', { read: ViewContainerRef, static: true })
  formRef: any;

  // @ViewChildren('formTemplate2')
  // divs!: QueryList<ElementRef>;

  private allData: any;
  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private workflowServices: WorkflowsService
  ) {}

  ngAfterViewInit() {}
  ngOnInit() {
    // this.allData = [];
    this.allData = this.workflowServices.get();

    if (this.allData.length == 0) {
      this.createInstance(BoxStartTemplateComponent);
    } else {
      this.recursiveFunction(this.allData.default.boxes);
    }
  }

  recursiveFunction(items: any) {
    items.map((item: any) => {
      this.createElement(item);
      if (item.hasChild) {
        this.recursiveFunction(item.children);
      }
    });
  }

  createElement(item: any) {
    console.log(item);
    switch (item.type) {
      case 'start':
        const boxStart = this.createInstance(BoxStartTemplateComponent);
        boxStart.instance.id = item.id;
        boxStart.instance.title = item.type;
        boxStart.instance.description = item.data.name;
        break;
      case 'email':
        const boxEmail = this.createInstance(BoxEmailTemplateComponent);
        boxEmail.instance.id = item.id;
        boxEmail.instance.title = item.type;
        boxEmail.instance.description = item.data.name;
        break;
      case 'timer':
        const boxTimer = this.createInstance(BoxTimerTemplateComponent);
        boxTimer.instance.id = item.id;
        boxTimer.instance.title = item.type;
        boxTimer.instance.description = item.data.name;
        break;
      case 'conditional':
        const boxConditional = this.createInstance(
          BoxConditionalTemplateComponent
        );
        boxConditional.instance.id = item.id;
        boxConditional.instance.title = item.type;
        boxConditional.instance.description = item.data.name;
        break;
    }
  }

  createInstance(template: any) {
    const newTemplate = this.componentFactoryResolver.resolveComponentFactory(
      template
    );
    // this.count += 1;

    // debugger;
    // console.log(this.divs);

    // if (this.count == 6) {
    //   console.log(this.divs);
    //   // return this.formRef2.createComponent(newTemplate);
    // }

    return this.formRef.createComponent(newTemplate);
    // return this.formRef2.createComponent(conditional);
  }

  openModal() {
    console.log('open a modal');
    this.recursiveFunction(this.allData.default.boxes);
  }
}
