import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private collectedData: any = {};

  constructor() { }

  setData(dataKey: string, data: any) {
    this.collectedData[dataKey] = data;
  }

  getData() {
    return this.collectedData;
  }
}
