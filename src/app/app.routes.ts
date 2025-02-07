import { Routes } from '@angular/router';
import { SerialComponent } from './serial/serial.component';

export const routes: Routes = [
  { path: ':serial', component: SerialComponent },
  { path: '**', redirectTo: '/No-Vehicle', pathMatch: 'full' },  // This will catch invalid routes
];
