import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [],
})
export class AppComponent {
  name = signal('Angular book');
  image = signal(
    'https://www.apogeonline.com/contrib/uploads/angular-copertina.jpg'
  );
  count = signal(0);
  price = signal(40);
  quantity = signal(10);

  totalPrice = computed(() => this.count() * this.price());
  isDecrementDisabled = computed(() => this.count() === 0);
  isIncrementDisabled = computed(() => this.count() === this.quantity());

  onDecrement() {
    if (this.count() === 0) {
      return;
    }

    this.count.update((value) => value - 1);
  }

  onIncrement() {
    if (this.count() === this.quantity()) {
      return;
    }

    this.count.update((value) => value + 1);
  }

  onReset() {
    this.count.set(0);
  }
}
