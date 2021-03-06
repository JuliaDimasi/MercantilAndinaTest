import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoberturaDto } from '../../dto/cobertura-dto';
import { Observable } from 'rxjs';
import { baseApiMockMercantilAndina } from 'src/environments/environment';
import { map, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class MockMercantilAndinaService {
  baseApi: String = baseApiMockMercantilAndina;
  constructor(
    private http: HttpClient,
  ) { }


  existeUsuario(usuario: String): Observable<Boolean> {
    return this.http.get<Boolean>(this.baseApi + "/usuarios?nombre=" + usuario);
  }


  getCobertura(): Observable<CoberturaDto[]> {
    return this.http.get<CoberturaDto[]>(this.baseApi + "/coberturas")
    .pipe(
        map(res => res.sort((a,b) => a.puntaje - b.puntaje)),
     );
  }
}



