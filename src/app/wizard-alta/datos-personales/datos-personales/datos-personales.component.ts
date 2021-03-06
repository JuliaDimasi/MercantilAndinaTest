import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MunicipioDto } from 'src/app/dto/municipio-dto';
import { ProvinciaDto } from 'src/app/dto/provincia-dto';
import { GeoRefService } from '../../../services/geo-ref/geo-ref.service';
import { PersonaDto } from '../../../dto/persona-dto';
import { MockMercantilAndinaService } from 'src/app/services/mock-mercantil-andina/mock-mercantil-andina.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})

export class DatosPersonalesComponent implements OnInit {

  @Output() guardarDatosPersonales = new EventEmitter<any>();
  @Input() datosPersona;
  
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

  existeUsuario:Boolean = true;
  provincias: ProvinciaDto[] = [];
  municipios: MunicipioDto[] = [];

  
  constructor(
    private formBuilder: FormBuilder,
    private geoServ: GeoRefService,
    private mockServ: MockMercantilAndinaService,
  ) {
    
   }

  ngOnInit(): void {
    console.log(this.datosPersona)
    if (this.datosPersona != undefined){
      this.datosPersonaForm = this.datosPersona;
      this.getMunicipios(this.datosPersonaForm.value.provincia);
    }
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



  siguiente() {

    let personaResumen : PersonaDto = new PersonaDto();
    
    personaResumen.apellido = this.datosPersonaForm.value.apellido;
    personaResumen.nombre = this.datosPersonaForm.controls['nombre'].value;
    personaResumen.dni = this.datosPersonaForm.controls['dni'].value;
    personaResumen.email = this.datosPersonaForm.controls['email'].value;
    personaResumen.celular = this.datosPersonaForm.controls['celular'].value;
    personaResumen.telefono = this.datosPersonaForm.controls['telefono'].value;
    personaResumen.fechaNac = this.datosPersonaForm.controls['fechaNac'].value;
    personaResumen.provincia = this.provincias.filter(prov =>prov.id == this.datosPersonaForm.controls['provincia'].value )[0].nombre;
    personaResumen.ciudad = this.municipios.filter(ciudad => ciudad.id == this.datosPersonaForm.controls['ciudad'].value)[0].nombre;
    personaResumen.domicilio = this.datosPersonaForm.controls['domicilio'].value;
    console.log(personaResumen)
    this.guardarDatosPersonales.emit(
      { "formDatosPersonales":this.datosPersonaForm,
        "personaResumen":personaResumen});
    
  }

  usuarioExistente(){
    let usuario = this.datosPersonaForm.value.usuario;
    this.mockServ.existeUsuario(usuario).subscribe(res=>{ 
      this.existeUsuario = res;
      if (this.existeUsuario) {
          this.datosPersonaForm.controls.usuario.setErrors({
              notUnique: true
          });
      }
    })
  }

  validDate() {
    const hoy = new Date();
    const cumpleanos = new Date(this.datosPersonaForm.controls.fechaNac.value);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    if ((edad < 18) || (edad >= 99))  {
      this.datosPersonaForm.controls.fechaNac.setErrors({
            edadInvalid: true
        });
    }
}
}
