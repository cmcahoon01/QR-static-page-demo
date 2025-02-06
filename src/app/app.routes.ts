import { Routes } from '@angular/router';
import { SerialComponent } from './serial/serial.component';

export const routes: Routes = [
  { path: ':serial', component: SerialComponent }  // This makes ":serial" a route parameter
];
