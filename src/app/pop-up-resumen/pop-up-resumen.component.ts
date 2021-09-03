import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up-resumen',
  templateUrl: './pop-up-resumen.component.html',
  styleUrls: ['./pop-up-resumen.component.scss']
})
export class PopUpResumenComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  cerrar(){
    this.modal.close()
  }
}
