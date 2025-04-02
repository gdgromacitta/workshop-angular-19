import { Component } from '@angular/core';
import { CounterComponent } from '../components/counter/counter.component';

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
  imports: [CounterComponent],
})
export class AppComponent {
  product: Product = {
    name: 'Angular book',
    image: 'https://www.apogeonline.com/contrib/uploads/angular-copertina.jpg',
    count: 0,
    price: 40,
    quantity: 10,
  };

  onCountChange(count: number) {
    this.product.count = count;

    console.log(this.product.count);
  }
}
