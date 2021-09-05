import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpResumenComponent } from 'src/app/pop-up-resumen/pop-up-resumen.component';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {

  @Output() volverCobertura = new EventEmitter<any>();
  @Input() resumen;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log(this.resumen)
  }
  openPopUpConfirmed() {
    this.modalService.open(PopUpResumenComponent, {
      size: 'sm', backdrop: 'static'
    })
  }

  volver() {
    this.volverCobertura.emit({});
  }
}
