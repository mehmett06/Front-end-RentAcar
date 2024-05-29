import {Routes} from "@angular/router";
import {ManagementPageComponent} from "./management-page.component";
import {authGuard} from "../../shared/guards/auth.guard";
import {ManagementBrandsPageComponent} from "./management-brands-page/management-brands-page.component";
import { ManagementCreateBrandPageComponent } from "./management-brands-page/management-create-brand-page/management-create-brand-page.component";
import { ManagementEditBrandPageComponent } from "./management-brands-page/management-edit-brand-page/management-edit-brand-page.component";
import { ManagementModelsPageComponent } from "./management-models-page/management-models-page.component";
import { ManagementCreateModelPageComponent } from "./management-models-page/management-create-model-page/management-create-model-page.component";
import { ManagementEditModelPageComponent } from "./management-models-page/management-edit-model-page/management-edit-model-page.component";

export const managementRoutes: Routes = [
  {
    path: 'management',
    canActivate: [authGuard], //angular guards
    data: { // route'a özel veri tutma
      requiredRoles: ['admin'],
    },
    component: ManagementPageComponent,
    children: [
      {
        path: 'brands', //management/brands
        component: ManagementBrandsPageComponent,
      },
      {
        path: 'brands/create',
        component: ManagementCreateBrandPageComponent
      },
      {
        path: 'brands/edit/:brandId', //dinamik olarak id gelecek demek ":"
        component: ManagementEditBrandPageComponent,
      },
      
      {
        path:'models',
        component: ManagementModelsPageComponent
      },
      {
        path: 'models/create',
        component: ManagementCreateModelPageComponent
      },
      {
        path: 'models/edit/:modelId', //dinamik olarak id gelecek demek ":"
        component: ManagementEditModelPageComponent,
      },
    ],
  },
];
