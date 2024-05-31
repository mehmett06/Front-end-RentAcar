import { Component } from '@angular/core';
import {NavbarComponent, NavItem, NavTitle} from "../../components/navbar/navbar.component";
import {FooterComponent} from "../../components/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

  navTitle : NavTitle = { text: 'Mynex Rental', routerLink: '/'}
  navItems : NavItem[] = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: 'mailto:baymehmetduman@gmail.com' },
    { label: 'Management', link: '/management' },
    { label: 'Brands Management', link: '/management/brands' },
    { label: 'Models Management', link: '/management/models' },
    { label: 'Cars Management', link: '/management/cars' },
    

  ];

}
