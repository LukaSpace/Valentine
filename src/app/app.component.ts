import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="min-h-screen bg-white">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'valentine';
}