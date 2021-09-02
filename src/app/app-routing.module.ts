import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoberturasComponent } from './wizard-alta/coberturas/coberturas/coberturas.component';
import { DatoVehiculoComponent } from './wizard-alta/dato-vehiculo/dato-vehiculo/dato-vehiculo.component';
import { DatosPersonalesComponent } from './wizard-alta/datos-personales/datos-personales/datos-personales.component';
import { ResumenComponent } from './wizard-alta/resumen/resumen/resumen.component';


const routes: Routes = [
  {
    path: '', component: DatosPersonalesComponent,
  },
  {
    path: 'datos-personales', component: DatosPersonalesComponent,
  },
  {
    path: 'dato-vehiculo', component: DatoVehiculoComponent,
  },
  {
    path: 'coberturas', component: CoberturasComponent,
  },
  {
    path: 'resumen', component: ResumenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
