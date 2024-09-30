import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppComponent } from './app.component';

export const routes: Routes = [ // Default route
    { path: 'signup', component: SignUpComponent }, // Signup route
    {path: '' , redirectTo: 'AppComponent', pathMatch: 'full'}
  
];
