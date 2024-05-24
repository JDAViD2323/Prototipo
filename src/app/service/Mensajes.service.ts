import { Injectable } from '@angular/core';
import { dat } from '../interface/mensaje.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private http: HttpClient) { }

  private jsonUrl = 'https://raw.githubusercontent.com/JDAViD2323/Prototipo/main/src/assets/data/dataMensaje.json?token=GHSAT0AAAAAACSHOLQK6UTTVRJ7Q7KCEDZUZSRCOVQ';


  getData(): Observable<dat[]> {
    return this.http.get<dat[]>(this.jsonUrl);
  }
  getMessages(): Observable<dat[]> {
    return this.http.get<any>(this.jsonUrl);
  }

}
