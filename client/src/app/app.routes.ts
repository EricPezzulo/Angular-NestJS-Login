import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
];
