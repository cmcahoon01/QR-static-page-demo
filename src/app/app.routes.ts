import { Routes } from '@angular/router';
import {AppComponent} from './app.component';

export const routes: Routes = [
  { path: ':serial', component: AppComponent }  // This makes ":serial" a route parameter
];
