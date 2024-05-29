import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';

import {HomeLayoutComponent} from "./shared/layouts/home-layout/home-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TOBETO';
  
}
