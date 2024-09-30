import { Routes } from '@angular/router';
import { SignUpARTISTComponent } from './sign-up-ARTIST/sign-up-ARTIST.component';
import { SignUpITComponent } from './SIGN-UP-it/sign-up-IT.component';

export const routes: Routes = [ // Default route
    { path: 'signupARTIST', component: SignUpARTISTComponent }, 
    {path: 'SIGNUPit', component: SignUpITComponent}, 
    {path: '' , redirectTo: 'AppComponent', pathMatch: 'full'}
  
];
