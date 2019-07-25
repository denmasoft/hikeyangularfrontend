import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class ResponseService {
  private data: Observable<any[]> = new Observable<any[]>();
  constructor() { }
  readData(): Observable<any[]> {
      return this.data;
  }
  setData(data) {
    this.data = data;
  }
}
