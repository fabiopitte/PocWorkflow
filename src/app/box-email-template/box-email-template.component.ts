import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-box-email-template',
  templateUrl: './box-email-template.component.html',
  styleUrls: ['./box-email-template.component.scss'],
})
export class BoxEmailTemplateComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() id: string;
  @Input() allData: any;
  closeResult = '';

  constructor(private modalService: NgbModal) {
    this.id = '';
    this.title = '';
    this.description = '';
    this.allData = null;
  }

  ngOnInit(): void {}

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
