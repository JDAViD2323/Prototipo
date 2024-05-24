// publicaciones.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { publicacion } from '../interface/publicacion.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  private jsonUrl = 'https://raw.githubusercontent.com/JDAViD2323/Prototipo/main/src/assets/data/dataPublicaci%C3%B3n.json';

  constructor(private http: HttpClient) {}

  getPublicaciones(): Observable<publicacion[]> {
    return this.http.get<publicacion[]>(this.jsonUrl);
  }
}
