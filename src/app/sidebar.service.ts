import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariableService {
  private variableSubject = new Subject<boolean>();
  variable$ = this.variableSubject.asObservable();

  setVariable(value: boolean) {
    this.variableSubject.next(value);
    console.log("hijo"+value);
  }
}
