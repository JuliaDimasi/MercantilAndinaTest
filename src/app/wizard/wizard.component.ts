import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  state = 1;
  personaResumen;
  formDatosPersonales;

  formDatosVehiculo;
  vehiculoResumen;
  //datosVehiculo;
  cobertura;
  resumen;
  constructor() { }

  ngOnInit(): void {
  }
  //datos persona
  saveDatosPersonales($event) {
    this.state = 2;
    this.formDatosPersonales = $event.formDatosPersonales;
    this.personaResumen = $event.personaResumen;
  }

  //datos vehiculo
  volverPersonales($event) {
    this.state = 1;
    this.formDatosVehiculo = $event;
    //console.log(this.datosVehiculo)
  }

  saveDatosVehiculo($event) {
    this.state = 3;
    //this.datosVehiculo = $event;

    this.formDatosVehiculo = $event.formDatosVehiculo;
    this.vehiculoResumen = $event.vehiculoResumen;
    //console.log(this.datosVehiculo)
  }
  //datos cobertura
  volverVehiculo($event) {
    this.state = 2;
  }

  saveCobertura($event) {
    this.state = 4;
    this.cobertura = $event;
    this.resumen = {
      "datosPersonales": this.personaResumen,
      "datosVehiculo": this.vehiculoResumen,
      "cobertura": this.cobertura,
    }
    console.log(this.resumen)
  }
  //resumen
  volverCobertura($event) {
    this.state = 3;
  }

}
