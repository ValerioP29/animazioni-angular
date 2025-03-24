// src/app/app.component.ts
import { Component } from '@angular/core';
import { AnimationsComponent } from './animations/animations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AnimationsComponent],
  template: `<app-animations></app-animations>`,
  styles: []
})
export class AppComponent { }
