import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DatosPersonalesComponent } from './wizard-alta/datos-personales/datos-personales/datos-personales.component';
import { DatoVehiculoComponent } from './wizard-alta/dato-vehiculo/dato-vehiculo/dato-vehiculo.component';
import { CoberturasComponent } from './wizard-alta/coberturas/coberturas/coberturas.component';
import { ResumenComponent } from './wizard-alta/resumen/resumen/resumen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WizardComponent } from './wizard/wizard.component';
import { PopUpResumenComponent } from './pop-up-resumen/pop-up-resumen.component';
import { YesNoPipe } from './yes-no.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    DatoVehiculoComponent,
    CoberturasComponent,
    ResumenComponent,
    NavbarComponent,
    FooterComponent,
    WizardComponent,
    PopUpResumenComponent,
    YesNoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
