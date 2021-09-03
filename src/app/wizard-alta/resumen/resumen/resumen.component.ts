import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpResumenComponent } from 'src/app/pop-up-resumen/pop-up-resumen.component';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openPopUpConfirmed(){
    this.modalService.open(PopUpResumenComponent,{
      size: 'sm', backdrop: 'static'
    })
  }
}
