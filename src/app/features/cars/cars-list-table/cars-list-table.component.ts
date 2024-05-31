import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { CarListBaseComponent } from '../car-list-base/car-list-base.component';
import { CarControllerService } from '../../../shared/services/api';
import { TableDirective } from '../../../shared/directives/table.directive';

@Component({
  selector: 'app-cars-list-table',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    RouterModule,
    TableDirective
  ],
  templateUrl: './cars-list-table.component.html',
  styleUrl: './cars-list-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListTableComponent extends CarListBaseComponent{ 

  constructor(
    carsService: CarControllerService, 
    change: ChangeDetectorRef,
    private carControllerService: CarControllerService
  ){
    super(carsService,change);
  }

  deleteCar(id: number) {
    this.carControllerService.deleteCarById({ id }).subscribe({
      complete: () => {
        this.getCarsList();
      },
    });
  }
}
