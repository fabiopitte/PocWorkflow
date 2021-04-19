import { 
  Input,
  AfterViewInit,
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BoxEmailTemplateComponent } from '../box-email-template/box-email-template.component';
import { BoxStartTemplateComponent } from '../box-start-template/box-start-template.component';
import { BoxTimerTemplateComponent } from '../box-timer-template/box-timer-template.component';
import { WorkflowsService } from '../workflows.service';

@Component({
  selector: 'app-box-conditional-template',
  templateUrl: './box-conditional-template.component.html',
  styleUrls: ['./box-conditional-template.component.scss'],
})
export class BoxConditionalTemplateComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() description: string;
  @Input() id: string;
  @ViewChild('formTemplateLeft', { read: ViewContainerRef, static: true }) formTemplateLeft: any;
  @ViewChild('formTemplateRight', { read: ViewContainerRef, static: true }) formTemplateRight: any;
  private allData: any;
  closeResult = '';
  position: string = 'left';

  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: NgbModal,
    private workflowServices: WorkflowsService
  ) {
    this.id = '';
    this.title = '';
    this.description = '';
  }
  ngAfterViewInit(): void { }

  ngOnInit(): void {    
    this.allData = this.workflowServices.getConditional();
    // if (this.allData.length == 0) {
    //   this.createInstance(BoxStartTemplateComponent);
    //} else {
    if (this.allData.length != 0) {
      debugger;
      console.log('children');
      this.recursiveFunction(this.allData.default.boxes[0].children);
      this.position = 'right';
      this.recursiveFunction(this.allData.default.boxes[1].children);
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
    debugger;
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
        boxTimer.instance.description = item.data.name + ' - ' + item.data.createdDate;
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
    debugger;
    if (this.position == 'left') {
      return this.formTemplateLeft.createComponent(newTemplate);
    }
    return this.formTemplateRight.createComponent(newTemplate);
  }

  openModal() {
    this.recursiveFunction(this.allData.default.boxes);
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
