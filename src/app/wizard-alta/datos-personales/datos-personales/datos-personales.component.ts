import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MunicipioDto } from 'src/app/dto/municipio-dto';
import { ProvinciaDto } from 'src/app/dto/provincia-dto';
import { GeoRefService } from '../../../services/geo-ref/geo-ref.service';


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})

export class DatosPersonalesComponent implements OnInit {
  datosPersonaForm = this.formBuilder.group({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
    dni: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    celular: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    usuario: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    contrasenia: new FormControl('', [Validators.required]),
    fechaNac: new FormControl('', []),
    provincia: new FormControl('', []),
    ciudad: new FormControl('', []),
    domicilio: new FormControl('', []),
  });

  model;
  provincias: ProvinciaDto[] = [];
  municipios: MunicipioDto[] = [];

  
  constructor(
    private formBuilder: FormBuilder,
    private geoServ: GeoRefService,
  ) { }

  ngOnInit(): void {
    this.getProvincias();
  }

  getProvincias() {
    this.geoServ.getProvincias().subscribe((dataProvincias: ProvinciaDto[]) => {
      this.provincias = dataProvincias;
      console.log(this.provincias)
    });
  }

  getMunicipios(event) {
    let idProvincia = event;
    this.geoServ.getMuncipios(idProvincia).subscribe((dataMunicipios: MunicipioDto[]) => {
      this.municipios = dataMunicipios;
      console.log(this.provincias)
    });
  }



  onSubmit() {
    /*if (this.inquiryForm.valid) {
      const _v = this.inquiryForm.value;
      const form = new FormData();
      form.append('full_name', _v.full_name);
      form.append('email', _v.email);
      form.append('phone_number', _v.phone_number);
      form.append('purpose', _v.purpose);
      form.append('message', _v.message);


      // Submit your form to app call
    }*/
  }
}
