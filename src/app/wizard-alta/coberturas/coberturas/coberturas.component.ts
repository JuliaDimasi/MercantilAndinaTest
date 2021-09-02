import { Component, OnInit } from '@angular/core';
import { CoberturaDto } from 'src/app/dto/cobertura-dto';
import { MockMercantilAndinaService } from '../../../services/mock-mercantil-andina/mock-mercantil-andina.service';

@Component({
  selector: 'app-coberturas',
  templateUrl: './coberturas.component.html',
  styleUrls: ['./coberturas.component.scss']
})
export class CoberturasComponent implements OnInit {

  usuarios: Boolean;
  coberturas: CoberturaDto[];

  constructor(
    private mockMercantilAndinaServ: MockMercantilAndinaService,
  ) { }

  ngOnInit(): void {
  }

  existeUsuario(usuario: String) {
    this.mockMercantilAndinaServ.existeUsuario(usuario).subscribe((dataUsuarios: Boolean) => {
      this.usuarios = dataUsuarios;
      console.log(this.usuarios)
    });
  }

  getCobertura() {
    this.mockMercantilAndinaServ.getCobertura().subscribe((dataCoberturas: CoberturaDto[]) => {
      this.coberturas = dataCoberturas;
      console.log(this.coberturas)
    });
  }

}
