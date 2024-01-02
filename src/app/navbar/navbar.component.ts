import { Component } from '@angular/core';
import { faBucket,faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faBucket = faBucket;
  faUserPlus = faUserPlus;
  
}
