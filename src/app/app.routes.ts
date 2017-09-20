import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { ModalComponent } from './modal/modal.component';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'modal', component: ModalComponent },
  { path: '**', redirectTo: '' }
];
