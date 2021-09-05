import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MarcaDto } from 'src/app/dto/marca-dto';
import { VersionAutoDto } from 'src/app/dto/version-auto-dto';
import { MercantilAndinaService } from '../../../services/mercantil-andina/mercantil-andina.service';
import { VehiculoDto } from '../../../dto/vehiculo-dto'

@Component({
  selector: 'app-dato-vehiculo',
  templateUrl: './dato-vehiculo.component.html',
  styleUrls: ['./dato-vehiculo.component.scss']
})
export class DatoVehiculoComponent implements OnInit {

  @Output() guardarDatosVehiculo = new EventEmitter<any>();
  @Output() volverDatosPersonales = new EventEmitter<any>();
  @Input() datosVehiculo;

  datosVehiculoForm = this.formBuilder.group({
    marca: new FormControl('', [Validators.required]),
    anio: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required]),
    version: new FormControl('', [Validators.required]),
  });

  marcas: MarcaDto[] = [];
  modelos: String[] = [];
  versiones: VersionAutoDto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private mercantilAndinaServ: MercantilAndinaService,
  ) { }

  ngOnInit(): void {
    if (this.datosVehiculo != undefined) {
      this.datosVehiculoForm = this.datosVehiculo;
      this.getModelos();
      this.getVersiones();
    }
    this.getMarcas();
  }

  getMarcas() {
    this.mercantilAndinaServ.getMarcas().subscribe((dataMarcas: MarcaDto[]) => {
      this.marcas = dataMarcas;
      console.log(this.marcas)
    });
  }

  getModelos() {
    let marca = this.datosVehiculoForm.value.marca;
    let anio = this.datosVehiculoForm.value.anio;
    if (marca != undefined && anio != undefined)
      this.mercantilAndinaServ.getModelos(marca, anio)
        .subscribe((dataModelos: String[]) => {
          this.modelos = dataModelos;
          console.log(this.modelos)
        });
  }

  getVersiones() {
    let marca = this.datosVehiculoForm.value.marca;
    let anio = this.datosVehiculoForm.value.anio;
    let modelo = this.datosVehiculoForm.value.modelo;

    if (marca != undefined && anio != undefined && modelo != undefined)
      this.mercantilAndinaServ.getVersiones(marca, anio, modelo)
        .subscribe((dataVersiones: VersionAutoDto[]) => {
          this.versiones = dataVersiones;
          console.log(this.versiones)
        });
  }

  siguiente() {
    let vehiculoResumen: VehiculoDto = new VehiculoDto();
    vehiculoResumen.marca = this.marcas.filter(mar => mar.codigo == this.datosVehiculoForm.value.marca)[0].desc;
    vehiculoResumen.anio = this.datosVehiculoForm.value.anio;
    vehiculoResumen.modelo = this.datosVehiculoForm.value.modelo;
    vehiculoResumen.version = this.datosVehiculoForm.value.version;
    this.guardarDatosVehiculo.emit(
      {
        "formDatosVehiculo": this.datosVehiculoForm,
        "vehiculoResumen": vehiculoResumen
      });
  }

  volver() {
    this.volverDatosPersonales.emit(this.datosVehiculoForm);
  }

}

