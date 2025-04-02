import { Component, signal } from '@angular/core';

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

  onDecrement() {
    this.count.update((value) => value - 1);
  }

  onIncrement() {
    this.count.update((value) => value + 1);
  }

  onReset() {
    this.count.set(0);
  }
}
