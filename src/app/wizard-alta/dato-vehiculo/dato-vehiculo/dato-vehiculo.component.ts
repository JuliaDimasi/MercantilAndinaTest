import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MarcaDto } from 'src/app/dto/marca-dto';
import { VersionAutoDto } from 'src/app/dto/version-auto-dto';
import { MercantilAndinaService } from '../../../services/mercantil-andina/mercantil-andina.service';


@Component({
  selector: 'app-dato-vehiculo',
  templateUrl: './dato-vehiculo.component.html',
  styleUrls: ['./dato-vehiculo.component.scss']
})
export class DatoVehiculoComponent implements OnInit {
  datosVehiculoForm = this.formBuilder.group({
    marca: new FormControl('', [Validators.required]),
    anio: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required]),
    version: new FormControl('', [Validators.required]),
  });

  marcas: MarcaDto[] = [];
  modelos: String[] = [];
  versiones: VersionAutoDto[] = [];

  codigoMarca;
  codigoVersion;
  modelo;
  anio;


  constructor(
    private formBuilder: FormBuilder,
    private mercantilAndinaServ: MercantilAndinaService,

  ) { }

  ngOnInit(): void {
    this.getMarcas();
    
  }

    getMarcas() {
    this.mercantilAndinaServ.getMarcas().subscribe((dataMarcas: MarcaDto[]) => {
      this.marcas = dataMarcas;
      console.log(this.marcas)
    });
  }

  getModelos(event) {
    this.codigoMarca = event;
   this.mercantilAndinaServ.getModelos(this.codigoMarca, "2021").subscribe((dataModelos: String[]) => {
      this.modelos = dataModelos;
      console.log(this.modelos)
    });
  } 

  

  getVersiones(event) {
    this.modelo = event;
    this.mercantilAndinaServ.getVersiones(this.codigoMarca, "2021", this.modelo).subscribe((dataVersiones: VersionAutoDto[]) => {
      this.versiones = dataVersiones;
      console.log(this.versiones)
    });
  } 

}

