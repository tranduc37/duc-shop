import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/common/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  onToggle: boolean = false;
  numberItem: number = 0;

  constructor(
    public productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.numberItem = this.productsService._numberItem;
  }

  search() {
    this.onToggle = !this.onToggle;
  }

}
