import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  _numberItem: any = 0;
  get numberItem():number{
    return this._numberItem;
  }
  set numberItem(val: number){
    this._numberItem = val;
  }

  constructor(
    private http: HttpClient,
  ) { }

  getListProduct() {
    return this.http.get<any>('https://fakestoreapi.com/products').pipe(map((res: any) => {
      return res;
    }))
  }
}
