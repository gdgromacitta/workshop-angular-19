import { Component, computed, signal } from '@angular/core';
import { CounterComponent } from '../components/counter/counter.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

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
  products = signal<Product[]>([
    {
      name: 'Angular book',
      image:
        'https://www.apogeonline.com/contrib/uploads/angular-copertina.jpg',
      count: 0,
      price: 40,
      quantity: 10,
    },
    {
      name: 'React book',
      image:
        'https://www.apogeonline.com/contrib/uploads/9788850336234_quarta.jpg',
      count: 0,
      price: 20,
      quantity: 7,
    },
    {
      name: 'Node book',
      image:
        'https://www.apogeonline.com/contrib/uploads/node-js-copertina.jpg',
      count: 0,
      price: 35,
      quantity: 13,
    },
    {
      name: 'Rust book',
      image: 'https://www.apogeonline.com/contrib/uploads/rust-copertina.jpg',
      count: 0,
      price: 23,
      quantity: 17,
    },
    {
      name: 'Python book',
      image:
        'https://www.apogeonline.com/contrib/uploads/9788850334810_quarta.jpg',
      count: 0,
      price: 50,
      quantity: 5,
    },
    {
      name: 'Java book',
      image:
        'https://www.apogeonline.com/contrib/uploads/programmare-in-java-copertina.jpg',
      count: 0,
      price: 30,
      quantity: 12,
    },
  ]);

  productsInCart = computed(() => {
    return this.products().filter((product) => product.count > 0);
  });

  totalPrice = computed(() => {
    return this.products().reduce((acc, product) => {
      return acc + product.count * product.price;
    }, 0);
  });

  onCountChange(index: number, count: number) {
    this.products.update((products) => {
      products[index].count = count;
      return [...products];
    });
  }

  checkout() {
    alert(
      `Acquisto effettuato con successo!\nTotale: ${this.totalPrice()}€\nProdotti acquistati: ${
        this.productsInCart().length
      }`
    );

    this.products.update((products) => {
      products.forEach((product) => {
        product.count = 0;
      });
      return [...products];
    });
  }
}
