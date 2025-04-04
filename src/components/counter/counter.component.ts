import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, input, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe],
})
export class CounterComponent {
  name = input('');
  image = input('');
  count = model(0);
  price = input(40);
  quantity = input(10);

  totalPrice = computed(() => this.count() * this.price());
  isDecrementDisabled = computed(() => this.count() === 0);
  isIncrementDisabled = computed(() => this.count() === this.quantity());

  constructor() {
    effect(() => {
      const message = `Quantità del prodotto ${this.name()} aggiornata`;
      console.log(message, this.count());
    });
  }

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
