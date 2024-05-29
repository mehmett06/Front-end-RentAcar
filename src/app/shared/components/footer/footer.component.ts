import { Component } from '@angular/core';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ 
  MdbCheckboxModule,
  
  
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
