import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page-404/page-404.component';
import { YoutubeHomeComponent } from './pages/youtube/youtube-home/youtube-home.component';

export const routes: Routes = [
    {path: '', redirectTo: '/youtube', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'page-404', component: Page404Component},
    {path: 'youtube', component: YoutubeHomeComponent},

];
