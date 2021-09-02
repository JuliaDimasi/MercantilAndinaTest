import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseApiGeoRef } from 'src/environments/environment';
import { ProvinciaDto } from '../../dto/provincia-dto';
import { MunicipioDto } from '../../dto/municipio-dto';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


export class GeoRefService {
  baseApi: String = baseApiGeoRef;
  constructor(
    private http: HttpClient,
  ) { }


  getProvincias(): Observable<ProvinciaDto[]> {
    return this.http.get<ProvinciaDto[]>(this.baseApi + "/provincias")
      .pipe(
        map((data: any) => {
          return data.provincias
        })
      );
  }

  getMuncipios(idProvincia: string): Observable<MunicipioDto[]> {
    return this.http.get<MunicipioDto[]>(this.baseApi + "/municipios?provincia=" + idProvincia + "&campos=id,nombre&max=135")
      .pipe(
        map((data: any) => {
          return data.municipios
        })
      );
  }
}
