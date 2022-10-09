import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/common/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  listProducts: any[] = [];

  constructor(
    public productsService: ProductsService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.productsService.getListProduct().subscribe((res: any)=> {
      this.listProducts = res;
      console.log('listProducts', this.listProducts)
    })
  }

}
