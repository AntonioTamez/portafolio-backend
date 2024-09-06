import { Component } from '@angular/core';
import { MenuPrincipalComponent } from "./components/menu-principal/menu-principal.component";

@Component({
  selector: 'app-youtube-home',
  standalone: true,
  imports: [MenuPrincipalComponent],
  templateUrl: './youtube-home.component.html',
  styleUrl: './youtube-home.component.scss'
})
export class YoutubeHomeComponent {

}
