import { Component } from '@angular/core';

import {AddModelFormComponent} from "../../../features/models/components/add-model-form/add-model-form.component";
import {
  ModelsListTableComponent
} from "../../../features/models/components/models-list-table/models-list-table.component";
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-management-models-page',
  standalone: true,
  imports: [
    CommonModule,
    ModelsListTableComponent,
    ButtonComponent,
    RouterModule
],
  templateUrl: './management-models-page.component.html',
  styleUrl: './management-models-page.component.scss'
})
export class ManagementModelsPageComponent {

}
