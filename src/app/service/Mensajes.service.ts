import { Injectable } from '@angular/core';
import { dat } from '../interface/mensaje.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private http: HttpClient) { }

  private jsonUrl = '../../assets/data/dataMensaje.json';


  getData(): Observable<dat[]> {
    return this.http.get<dat[]>(this.jsonUrl);
  }
  getMessages(): Observable<dat[]> {
    return this.http.get<any>(this.jsonUrl);
  }

}
