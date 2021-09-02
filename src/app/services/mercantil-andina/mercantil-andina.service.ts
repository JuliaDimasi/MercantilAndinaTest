import { Injectable } from '@angular/core';
import { baseApiMercantilAndina } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MarcaDto } from '../../dto/marca-dto';
import { VersionAutoDto } from '../../dto/version-auto-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MercantilAndinaService {
  baseApi: String = baseApiMercantilAndina;
  constructor(
    private http: HttpClient,
  ) { }


  getMarcas(): Observable<MarcaDto[]> {
    return this.http.get<MarcaDto[]>(this.baseApi + "/vehiculos/marcas");
  }

  getModelos(codigo: number, anio: String): Observable<String[]> {
    return this.http.get<String[]>(this.baseApi + "/vehiculos/marcas/" + codigo + "/" + anio);
  }

  getVersiones(codigo: number, anio: String, modelo: String): Observable<VersionAutoDto[]> {
    return this.http.get<VersionAutoDto[]>(this.baseApi + "/vehiculos/marcas/" + codigo + "/" + anio + "/" + modelo);
  }
}
