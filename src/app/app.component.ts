import { Component, inject } from '@angular/core';
import { CounterComponent } from '../components/counter/counter.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../services/product.service';

interface Product {
  name: string;
  image: string;
  count: number;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CounterComponent, MatMenuModule, MatIconModule],
})
export class AppComponent {
  private productService = inject(ProductService);

  products = this.productService.products;

  productsInCart = this.productService.productsInCart;

  totalPrice = this.productService.totalPrice;

  onCountChange(index: number, count: number) {
    this.productService.updateProductCount(index, count);
  }

  checkout() {
    this.productService.checkout();
  }
}
