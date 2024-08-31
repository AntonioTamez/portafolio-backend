import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page-404/page-404.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'page-404', component: Page404Component},

];
