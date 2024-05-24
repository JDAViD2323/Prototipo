// publicaciones.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { publicacion } from '../interface/publicacion.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  private jsonUrl = '../../assets/data/dataPublicación.json';

  constructor(private http: HttpClient) {}

  getPublicaciones(): Observable<publicacion[]> {
    return this.http.get<publicacion[]>(this.jsonUrl);
  }
}
