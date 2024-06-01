import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { RouterLink } from '@angular/router';
import { CarListBaseComponent } from '../car-list-base/car-list-base.component';
import { BrandControllerService, CarControllerService, FuelControllerService, GetAllBrandResponse, GetAllCarResponse, GetAllFuelResponse, GetAllModelResponse, GetAllTranmissionResponse, ModelControllerService, TransmissionControllerService } from '../../../shared/services/api';

@Component({
  selector: 'app-cars-card-list',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    RouterLink
  ],
  templateUrl: './cars-card-list.component.html',
  styleUrl: './cars-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsCardListComponent extends CarListBaseComponent implements OnInit {

  @Input() brandId: number | null = null;
  @Input() modelId: number | null = null;

  get filteredCars(): GetAllCarResponse[] {
    let newList: GetAllCarResponse[] = this.cars;

    if (this.modelId)
      newList = newList.filter((car) => car.modelId === this.modelId);

    return newList;
  }

  constructor(
    private carControllerService: CarControllerService,
    private dailyPriceServices: CarControllerService,
    private plateServices: CarControllerService,

    private stateServices: CarControllerService,
    private brandsService: BrandControllerService,
    private fuelsService: FuelControllerService,
    private transmissionsService: TransmissionControllerService,
    change: ChangeDetectorRef
  ) {
    super(carControllerService, change);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.getModelRelations();
  }

  brands:GetAllBrandResponse[] = [];
  models:GetAllModelResponse[]=[];
  fuels: GetAllFuelResponse[] = [];
  transmissions: GetAllTranmissionResponse[] = [];
  dailyPrice:GetAllCarResponse[]=[];
  state:GetAllCarResponse[]=[];
  plate:GetAllCarResponse[]=[];

  getModelRelations(): void {
    // Brand
    this.brandsService.getAllBrands().subscribe((brands) => {
      this.brands = brands;
      this.change.markForCheck();
    });

    // Fuel
    this.fuelsService.getAllFuels().subscribe((fuels) => {
      this.fuels = fuels;
      this.change.markForCheck();
    });

    this.dailyPriceServices.getAllCars().subscribe((dailyPrice) => {
      this.dailyPrice= dailyPrice;
      this.change.markForCheck();
    });

    this.stateServices.getAllCars().subscribe((state) => {
      this.state= state;
      this.change.markForCheck();
    });


    this.plateServices.getAllCars().subscribe((plate) => {
      this.plate= plate;
      this.change.markForCheck();
    });


    // Transmission
    this.transmissionsService
      .getAllTransmissions()
      .subscribe((transmissions) => {
        this.transmissions = transmissions;
        this.change.markForCheck();
      });
  }

  getCarCardText(car: GetAllCarResponse): string {
    return `Model: ${
      this.models.find((model) => model.id === car.modelId)?.name
    }, 
    , Plate: ${
      car.plate
    }, Price: ${
      car.dailyPrice
    }, State: ${
      car.state
    },
    
    `;
  }
}
